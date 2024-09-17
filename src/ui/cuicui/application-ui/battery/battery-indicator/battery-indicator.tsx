import {
  Battery,
  BatteryCharging,
  BatteryFull,
  BatteryLow,
  BatteryMedium,
  BatteryWarning,
  InfinityIcon,
} from "lucide-react";
import type React from "react";
import { cn } from "#/src/utils/cn";

type BatteryInfoProps = {
  level: number | null;
  isCharging: boolean | null;
  chargingTime: number | null;
  dischargingTime: number | null;
  className?: string;
};

export const BatteryIndicator: React.FC<BatteryInfoProps> = ({
  level,
  isCharging,
  chargingTime,
  dischargingTime,
  className,
}) => {
  const batteryLevel = Math.round(level ?? 0); // Round the battery level

  const getBatteryIcon = (level: number | null, isCharging: boolean | null) => {
    if (level === null) return <Battery className="w-5 h-5 text-orange-500" />;
    if (isCharging)
      return <BatteryCharging className="w-5 h-5 text-blue-500" />;
    if (level >= 90)
      return <BatteryFull className="w-5 h-5 text-emerald-500" />;
    if (level >= 50) return <BatteryMedium className="w-5 h-5 text-lime-500" />;
    if (level >= 20) return <BatteryLow className="w-5 h-5 text-yellow-500" />;
    return <BatteryWarning className="w-5 h-5 text-red-500" />;
  };

  const getTextColor = (level: number | null) => {
    if (level === null) return "text-orange-500";
    if (level >= 50) return "text-emerald-500";
    if (level >= 20) return "text-yellow-500";
    return "text-red-500";
  };

  const formatTime = (time: number | null) => {
    if (time === null) return "";
    if (!Number.isFinite(time))
      return <InfinityIcon className="w-3 h-3 inline" />;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    if (hours > 23) return ">1d";
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div
      className={cn(
        "flex items-center space-x-2 dark:bg-neutral-500/20 bg-white border border-neutral-400/10 rounded-2xl px-3 py-1 shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      {getBatteryIcon(level, isCharging)}
      <div className="flex flex-col">
        <span className={`text-sm font-medium ${getTextColor(level)}`}>
          {level !== null ? `${batteryLevel}%` : 'Unavailable'}
        </span>
        <span className="text-xs text-neutral-500 flex items-center">
          {isCharging ? (
            <>
              <span className="mr-1">⚡</span>
              {formatTime(chargingTime)}
            </>
          ) : (
            formatTime(dischargingTime)
          )}
        </span>
      </div>
    </div>
  );
};
