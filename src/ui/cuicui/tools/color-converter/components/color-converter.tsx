"use client";
import { useEffect, useState } from "react";
import { TinyColor } from "@ctrl/tinycolor";
import { ModernSimpleInput } from "#/src/ui/cuicui/common-ui/inputs/modern-simple-input/modern-simple-input";
import {
  findClosestTailwindColor,
  getExactColorTailwindNameFromHexaValue,
} from "#/src/ui/cuicui/tools/color-converter/components/to-tailwind";
import { InlineCode } from "#/src/ui/cuicui/application-ui/code/inline-code/inline-code";
import { useCopyToClipboard } from "#/src/ui/cuicui/hooks/use-copy-to-clipboard/use-copy-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import HoverCard from "#/src/ui/cuicui/common-ui/cards/hover-effect-card/hover-effect-card";
import { TailwindCssLogo } from "#/src/assets/logo/tailwind-css-logo";
// Générer une correspondance entre les codes hexadécimaux et les noms de couleurs Tailwind
type ParsedColorType = {
  hex: string | null;
  rgb: string | null;
  hsl: string | null;
  name: string | false | null;
  tailwind?: string | null;
};

const inputList = [
  { slug: "hex", placeholder: "Enter a HEX color" },
  { slug: "rgb", placeholder: "Enter an RGB color" },
  { slug: "hsl", placeholder: "Enter an HSL color" },
] as const;

const convertColor = (color: string) => {
  const colorInstance = new TinyColor(color);
  if (color === "") {
    return {
      hex: null,
      rgb: null,
      hsl: null,
      name: null,
      tailwind: null,
    };
  }
  if (!colorInstance.isValid) {
    return {
      hex: null,
      rgb: null,
      hsl: null,
      name: null,
      tailwind: null,
    };
  }
  return {
    hex: colorInstance.toHexString(),
    rgb: colorInstance.toRgbString(),
    hsl: colorInstance.toHslString(),
    name: colorInstance.toName(),
    tailwind: findClosestTailwindColor(colorInstance.toHexString())?.hex,
  };
};

export const ColorConverter = () => {
  const [inputFocusName, setInputFocusName] =
    useState<(typeof inputList)[number]["slug"]>("hex");
  const [rgbInput, setRgbInput] = useState<string | null>(null);
  const [hslInput, setHslInput] = useState<string | null>(null);
  const [hexInput, setHexInput] = useState<string | null>(null);

  const [copiedText, copyToClipboard, isCopied] = useCopyToClipboard();

  const [parsedColor, setParsedColor] = useState<ParsedColorType>({
    hex: "",
    rgb: "",
    hsl: "",
    name: "",
  });

  useEffect(() => {
    handleColorChange("#fb923c");
  }, []);

  const handleColorChange = (color: string) => {
    const convertedColors = convertColor(color);

    if (inputFocusName === "hsl") {
      setHslInput(color);
    } else {
      setHslInput(convertedColors.hsl);
    }

    if (inputFocusName === "rgb") {
      setRgbInput(color);
    } else {
      setRgbInput(convertedColors.rgb);
    }

    if (inputFocusName === "hex") {
      setHexInput(color);
    } else {
      setHexInput(convertedColors.hex);
    }

    setParsedColor(convertedColors);
  };

  return (
    <div className="mx-auto p-4">
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
        {inputList.map((input) => {
          let inputValue: string | null;
          let parsedColorValue: string | null;
          switch (input.slug) {
            case "rgb": {
              inputValue = rgbInput;
              parsedColorValue = parsedColor.rgb;
              break;
            }
            case "hsl": {
              inputValue = hslInput;
              parsedColorValue = parsedColor.hsl;
              break;
            }
            case "hex": {
              inputValue = hexInput;
              parsedColorValue = parsedColor.hex;
              break;
            }
            default: {
              parsedColorValue = null;
              inputValue = "";
            }
          }
          return (
            <div key={input.slug}>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: <Input exists in ModernSimpleInput> */}
              <label>
                {input.slug.toUpperCase()} color:
                <ModernSimpleInput
                  onFocus={() => setInputFocusName(input.slug)}
                  onChange={(e) => {
                    handleColorChange(e.target.value);
                  }}
                  placeholder={input.placeholder}
                  type="text"
                  value={inputValue ?? ""}
                />
              </label>
              {parsedColor.hex && (
                <div className="mt-2 flex items-center gap-2">
                  <div
                    className="mr-2 h-8 w-8 rounded-full border border-neutral-500/10"
                    style={{ backgroundColor: parsedColor.hex }}
                  />
                  {parsedColorValue && (
                    <button
                      type="button"
                      className=""
                      onClick={() => copyToClipboard(parsedColorValue)}
                    >
                      <InlineCode className="inline-flex items-center gap-1">
                        {parsedColorValue}
                        {isCopied && copiedText === parsedColorValue ? (
                          <CheckIcon className="size-3" />
                        ) : (
                          <CopyIcon className="size-3" />
                        )}
                      </InlineCode>
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {parsedColor.hex && (
        <div className="mx-auto mt-10 space-y-2">
          {/* {parsedColor.rgb && <p>RGB : {parsedColor.rgb}</p>}
          {parsedColor.hsl && <p>HSL : {parsedColor.hsl}</p>} */}
          <TailwindCard
            tailwindClosestColorClass={getExactColorTailwindNameFromHexaValue(
              parsedColor.tailwind ?? "",
            )}
            originalHexaColor={parsedColor.hex}
            correspondingClassHexaColor={parsedColor.tailwind ?? "No hex found"}
          />
        </div>
      )}
    </div>
  );
};

export default ColorConverter;

const TailwindCard = ({
  tailwindClosestColorClass,
  originalHexaColor: origalHexaColor,
  correspondingClassHexaColor,
}: {
  tailwindClosestColorClass?: string | null;
  originalHexaColor?: string | null;
  correspondingClassHexaColor?: string | null;
}) => {
  return (
    <HoverCard
      className="flex flex-col justify-between rounded-xl border border-stone-500/10 bg-stone-400/10 p-2 group-hover:border-stone-500/50 group-hover:bg-stone-400/15"
      columns={10}
      containerClassName="mx-auto h-72 w-60"
      maxXrotation={15}
      maxYrotation={15}
      rows={12}
    >
      <div className="flex items-center justify-between gap-1 px-2">
        <p className="z-20 text-lg font-medium text-neutral-600 transition-opacity duration-300 ease-in-out dark:text-neutral-300">
          Tailwind Equivalent
          <br />
        </p>
        <TailwindCssLogo className="size-8" />
      </div>
      <p className="z-20 text-start text-2xl font-semibold tracking-tighter text-neutral-600 transition-opacity duration-300 ease-in-out dark:text-neutral-300">
        {tailwindClosestColorClass}
      </p>
      {origalHexaColor && correspondingClassHexaColor && (
        <div className="flex w-full flex-col gap-px">
          <p className="text-xs font-medium tracking-tight text-neutral-500">
            Original color
          </p>
          <div
            className="size-full h-14 rounded-t-xl"
            style={{
              backgroundColor: origalHexaColor,
            }}
          />
          <div
            className="size-full h-14 rounded-b-xl"
            style={{
              backgroundColor: correspondingClassHexaColor,
            }}
          />
          <p className="text-xs font-medium tracking-tight text-neutral-500">
            Closest tailwind color :<br /> {correspondingClassHexaColor}
          </p>
        </div>
      )}
    </HoverCard>
  );
};
