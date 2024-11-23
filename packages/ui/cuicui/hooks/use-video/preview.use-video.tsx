"use client";

import { useVideo } from "@/cuicui/hooks/use-video/use-video";
import { useRef } from "react";

export const PreviewUseVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    isPaused,
    isMuted,
    currentVolume,
    currentTime,
    // play,
    // pause,
    togglePause,
    increaseVolume,
    decreaseVolume,
    // mute,
    // unmute,
    toggleMute,
    forward,
    back,
    toggleFullscreen,
  } = useVideo(videoRef);

  return (
    <div className="cuicui-default-style">
      <video ref={videoRef} className="h-72 mb-4 w-full">
        <source src="/video/google-deepmind-demo-video.mp4" />
        <track
          kind="captions"
          srcLang="en"
          src="/video/google-deepmind-demo-video.vtt"
        />
        Your browser does not support the
      </video>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1 *:w-full">
          <button type="button" onClick={togglePause}>
            {isPaused ? "Play" : "Pause"}
          </button>
          <button type="button" onClick={toggleMute}>
            {isMuted ? "Unmute" : "Mute"}
          </button>
        </div>
        <p>
          <input
            type="range"
            disabled={true}
            min={0}
            max={100}
            value={currentVolume}
            // onChange={(e) => increaseVolume(Number(e.target.value))}
          />
        </p>
        <div className="flex  *:w-full gap-1">
          <button type="button" onClick={() => increaseVolume(5)}>
            Increase Volume
          </button>
          <button type="button" onClick={() => decreaseVolume(5)}>
            Decrease Volume
          </button>
        </div>
        <input
          type="range"
          min={0}
          max={videoRef.current?.duration ?? 0}
          value={currentTime}
          onChange={(e) => {
            if (videoRef.current) {
              videoRef.current.currentTime = Number(e.target.value);
            }
          }}
        />
        <div className="flex gap-1 *:w-full">
          <button type="button" onClick={() => forward(10)}>
            Forward 10s
          </button>
          <button type="button" onClick={() => back(10)}>
            Back 10s
          </button>
        </div>
        <button type="button" onClick={toggleFullscreen}>
          Fullscreen
        </button>
      </div>
    </div>
  );
};
