import { useCallback, useEffect, useState, type RefObject } from "react";

export const useVideo = (ref: RefObject<HTMLVideoElement>) => {
  const video = ref.current;

  const [videoState, setVideoState] = useState({
    isPaused: video ? video?.paused : true,
    isMuted: video ? video?.muted : false,
    currentVolume: video ? video?.volume : 100,
    currentTime: video ? video?.currentTime : 0,
  });

  const play = useCallback(() => {
    video?.play();
    setVideoState((prev) => {
      return {
        ...prev,
        isPaused: false,
        isMuted: video ? video.muted : prev.isMuted,
      };
    });
  }, [video]);

  const pause = useCallback(() => {
    video?.pause();
    setVideoState((prev) => {
      return {
        ...prev,
        isPaused: true,
      };
    });
  }, [video]);

  const handlePlayPauseControl = (e: Event) => {
    setVideoState((prev) => {
      return {
        ...prev,
        isPaused: (e.target as HTMLVideoElement).paused,
      };
    });
  };

  const togglePause = useCallback(
    () => (video?.paused ? play() : pause()),
    [video, play, pause],
  );

  const handleVolume = useCallback(
    (delta: number) => {
      const deltaDecimal = delta / 100;

      if (video) {
        let newVolume = video?.volume + deltaDecimal;

        if (newVolume >= 1) {
          newVolume = 1;
        } else if (newVolume <= 0) {
          newVolume = 0;
        }

        video.volume = newVolume;
        setVideoState((prev) => {
          return {
            ...prev,
            currentVolume: newVolume * 100,
          };
        });
      }
    },
    [video],
  );

  const handleVolumeControl = useCallback(
    (e: Event) => {
      if (e.target && video) {
        const newVolume = (e.target as HTMLVideoElement).volume * 100;

        if (newVolume === videoState.currentVolume) {
          handleMute(video.muted);
          return;
        }

        setVideoState((prev) => ({
          ...prev,
          currentVolume: (e.target as HTMLVideoElement).volume * 100,
        }));
      }
    },
    [video, videoState],
  );

  const handleMute = useCallback(
    (mute: boolean) => {
      if (video) {
        video.muted = mute;
        setVideoState((prev) => {
          return {
            ...prev,
            isMuted: mute,
          };
        });
      }
    },
    [video],
  );

  const handleTime = useCallback(
    (delta = 5) => {
      if (video) {
        let newTime = video.currentTime + delta;

        if (newTime >= video.duration) {
          newTime = video.duration;
        } else if (newTime <= 0) {
          newTime = 0;
        }

        video.currentTime = newTime;
        setVideoState((prev) => {
          return {
            ...prev,
            currentTime: newTime,
          };
        });
      }
    },
    [video],
  );

  const handleTimeControl = useCallback((e: Event) => {
    setVideoState((prev) => {
      return {
        ...prev,
        currentTime: (e.target as HTMLVideoElement).currentTime,
      };
    });
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video?.requestFullscreen().catch((err) => {
        console.log(err);
      });
    }
  }, [video]);

  useEffect(() => {
    return () => {
      pause();
    };
  }, [pause]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (video) {
      video.addEventListener("volumechange", handleVolumeControl);
      video.addEventListener("play", handlePlayPauseControl);
      video.addEventListener("pause", handlePlayPauseControl);
      video.addEventListener("timeupdate", handleTimeControl);

      return () => {
        video.removeEventListener("volumechange", handleVolumeControl);
        video.removeEventListener("play", handlePlayPauseControl);
        video.removeEventListener("pause", handlePlayPauseControl);
        video.removeEventListener("timeupdate", handleTimeControl);
      };
    }
  }, [video]);

  return {
    ...videoState,
    play,
    pause,
    togglePause,
    increaseVolume: (increase = 5) => handleVolume(increase),
    decreaseVolume: (decrease = 5) => handleVolume(decrease * -1),
    mute: () => handleMute(true),
    unmute: () => handleMute(false),
    toggleMute: () => handleMute(!video?.muted),
    forward: (increase = 5) => handleTime(increase),
    back: (decrease = 5) => handleTime(decrease * -1),
    toggleFullscreen,
  };
};
