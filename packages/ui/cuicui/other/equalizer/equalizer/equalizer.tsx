"use client";

import {
  type Dispatch,
  type PointerEvent,
  useEffect,
  useRef,
  useState,
  type SetStateAction,
} from "react";

/** This is what the parent component owns (no x and y). */
export type ValuePoint = {
  freq: number;
  gain: number;
};

/** This is purely for internal rendering logic. */
type RenderPoint = ValuePoint & {
  x: number;
  y: number;
};

export const AudioEqualizer = ({
  points,
  setPoints,
  maxDb = 12,
  minDb = -12,
}: {
  points: ValuePoint[];
  setPoints: Dispatch<SetStateAction<ValuePoint[]>>;
  maxDb?: number;
  minDb?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [frequencies, setFrequencies] = useState<number[]>([]);

  useEffect(() => {
    const updatedFrequencies = points.map((point) => point.freq);
    setFrequencies(updatedFrequencies);
  }, [points]);

  // We keep a separate array for rendering (includes x & y).
  const [renderPoints, setRenderPoints] = useState<RenderPoint[]>([]);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  /**
   * 1) Listen for resize and adjust the container dimension.
   */
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        const height = width / 2; // Maintain a 2:1 aspect ratio
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  /**
   * 2) Compute new x,y for each point whenever parent’s points or dimensions change.
   */
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) {
      return;
    }

    const { width, height } = dimensions;
    const padding = 40;
    const totalRange = maxDb - minDb;
    const yRange = height - padding * 2;

    const newRenderPoints: RenderPoint[] = points.map((p, i) => {
      // X
      const x =
        padding + ((width - padding * 2) * i) / (frequencies.length - 1);

      // Y from gain => linear transform from [minDb, maxDb] to [bottom, top].
      const ratio = (p.gain - minDb) / totalRange;
      const y = padding + (1 - ratio) * yRange;

      return { ...p, x, y };
    });

    setRenderPoints(newRenderPoints);
  }, [points, dimensions, maxDb, minDb, frequencies.length]);

  /**
   * 3) Handle dragging
   */
  const handlePointerDown = (index: number) => {
    setActivePoint(index);
  };

  const handlePointerMove = (e: PointerEvent<SVGSVGElement>) => {
    if (activePoint === null || !svgRef.current) {
      return;
    }

    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const padding = 40;

    let y = e.clientY - rect.top;
    y = Math.max(padding, Math.min(rect.height - padding, y));

    // Convert pointer y back to gain
    const totalRange = maxDb - minDb;
    const yRange = rect.height - padding * 2;
    const ratio = 1 - (y - padding) / yRange;
    let newGain = ratio * totalRange + minDb;

    // Clip the gain between minDb and maxDb
    if (newGain > maxDb) {
      newGain = maxDb;
    }
    if (newGain < minDb) {
      newGain = minDb;
    }

    // Update local rendering
    setRenderPoints((current) =>
      current.map((rp, i) => {
        if (i === activePoint) {
          return { ...rp, y, gain: newGain };
        }
        return rp;
      }),
    );

    // Notify the parent
    setPoints((current) =>
      current.map((p, i) => {
        if (i === activePoint) {
          return { ...p, gain: newGain };
        }
        return p;
      }),
    );
  };

  const handlePointerUp = () => {
    setActivePoint(null);
  };

  /**
   * 4) Build paths using `renderPoints`
   */
  const curvePath = `
    M ${renderPoints[0]?.x || 0} ${renderPoints[0]?.y || 0}
    ${renderPoints
      .map((point, i) => {
        if (i === 0) {
          return "";
        }
        const prevPoint = renderPoints[i - 1];
        const cx1 = prevPoint.x + (point.x - prevPoint.x) / 3;
        const cx2 = point.x - (point.x - prevPoint.x) / 3;
        return `C ${cx1} ${prevPoint.y} ${cx2} ${point.y} ${point.x} ${point.y}`;
      })
      .join(" ")}
  `;

  // For the gradient fill
  const gradientPath = `
    ${curvePath}
    L ${renderPoints[renderPoints.length - 1]?.x || 0} ${dimensions.height}
    L ${renderPoints[0]?.x || 0} ${dimensions.height}
    Z
  `;

  return (
    <div className="w-full space-y-4 select-none h-full" ref={containerRef}>
      <div className="relative" style={{ height: `${dimensions.height}px` }}>
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full"
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          <title>Equalizer</title>
          {/* Grid lines */}
          {renderPoints.map((point) => (
            <line
              key={`grid-${point.freq}`}
              x1={point.x}
              y1={40}
              x2={point.x}
              y2={dimensions.height}
              stroke="currentColor"
              strokeOpacity={0.1}
            />
          ))}

          {/* Gradient area */}
          <defs>
            <linearGradient id="curve-gradient" x1="0" x2="0" y1="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgb(34, 197, 94)"
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor="rgb(34, 197, 94)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path d={gradientPath} fill="url(#curve-gradient)" />

          {/* Curve line */}
          <path
            d={curvePath}
            fill="none"
            stroke="rgb(34, 197, 94)"
            strokeWidth={2}
          />

          {/* Draggable points */}
          {renderPoints.map((point, i) => (
            <circle
              key={point.freq}
              cx={point.x}
              cy={point.y}
              r={5}
              fill="white"
              cursor="pointer"
              onPointerDown={() => handlePointerDown(i)}
            />
          ))}

          {/* dB labels */}
          <text x="0" y="55" className="text-xs fill-muted-foreground">
            +{maxDb}dB
          </text>
          <text x="0" y="95%" className="text-xs fill-muted-foreground">
            {minDb}dB
          </text>
        </svg>

        {/* Frequency labels */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between px-[40px] transform translate-y-6">
          {frequencies.map((freq) => (
            <span key={freq} className="text-xs text-muted-foreground">
              {freq >= 1000 ? `${freq / 1000}KHz` : `${freq}Hz`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioEqualizer;
