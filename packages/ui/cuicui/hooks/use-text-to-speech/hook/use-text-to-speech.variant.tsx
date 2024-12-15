"use client";
import { useTts, type TTSHookProps } from "tts-react";

interface CustomProps extends TTSHookProps {
  highlight?: boolean;
}

const CustomTTSComponent = ({ children, highlight = false }: CustomProps) => {
  if (typeof window === "undefined") {
    return null;
  }
  const { ttsChildren, state, play, stop, pause } = useTts({
    children,
    markTextAsSpoken: highlight,
  });

  return (
    <div className="cuicui-default-style">
      <button type="button" disabled={state.isPlaying} onClick={play}>
        Play
      </button>
      <button type="button" disabled={!state.isPlaying} onClick={pause}>
        Pause
      </button>
      <button type="button" onClick={stop}>
        Stop
      </button>

      <p>{ttsChildren}</p>
    </div>
  );
};

export const PreviewUseTextToSpeech = () => {
  return (
    <CustomTTSComponent highlight={true}>
      Some text to be spoken and highlighted.
    </CustomTTSComponent>
  );
};

export default PreviewUseTextToSpeech;
