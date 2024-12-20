"use client";
import {
  type ChangeEvent,
  type ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { type TTSHookResponse, useTts } from "tts-react";

export const PreviewUseTextToSpeechAdvancedDemo = () => {
  if (typeof window === "undefined") {
    return <p>Server-side rendering is not supported.</p>;
  }
  const [pitch, setPitch] = useState(1);
  const [volume, setVolume] = useState(1);
  const [rate, setRate] = useState(1);
  const [voices, setVoices] = useState(
    window.speechSynthesis.getVoices() ?? [],
  );
  const [voice, setVoice] = useState<SpeechSynthesisVoice | undefined>();
  const [text, setText] = useState(
    "The hook can be used to create custom controls.",
  );
  const prevVolume = useRef(volume);
  const {
    ttsChildren,
    state,
    set,
    play,
    pause,
    replay,
    stop,
    toggleMute,
  }: TTSHookResponse = useTts({
    voice,
    children: text,
  });
  const onMuteChanged = useCallback(async () => {
    toggleMute((wasMuted) => {
      setVolume(wasMuted ? prevVolume.current : 0);
      set.volume(wasMuted ? prevVolume.current : 0);
    });
  }, [toggleMute, set]);

  const onSelectVoice = useCallback(
    (evt: ChangeEvent<HTMLSelectElement>) => {
      setVoice(voices.find((voice) => voice.name === evt.target.value));
      set.volume(1);
      setVolume(1);
      set.rate(1);
      setRate(1);
      set.pitch(1);
      setPitch(1);
    },
    [set, voices],
  );
  const onVolumeHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      const volume = Number.parseFloat(evt.target.value);

      set.volume(volume);
      setVolume(volume);
      prevVolume.current = volume;
    },
    [set],
  );
  const onRateHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      const rate = Number.parseFloat(evt.target.value);

      set.rate(rate);
      setRate(rate);
    },
    [set],
  );
  const onPitchHandler: ChangeEventHandler<HTMLInputElement> = useCallback(
    (evt) => {
      const pitch = Number.parseFloat(evt.target.value);

      set.pitch(pitch);
      setPitch(pitch);
    },
    [set],
  );

  useEffect(() => {
    if (state.voices) {
      setVoices(state.voices);
    }
  }, [state.voices]);

  return (
    <div className="cuicui-default-style flex flex-col gap-4">
      {voices.length > 0 ? (
        <>
          <small>
            <em>
              Some voices may create skewed word boundaries for the given text.
            </em>
          </small>
          <label>
            Write your text here:
            <textarea
              disabled={state.isPlaying}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
          <label>
            <select
              disabled={state.isPlaying}
              value={voice?.name}
              onChange={onSelectVoice}
            >
              <option>-- Select a voice --</option>
              {voices.map(({ name, lang }) => (
                <option key={name} value={name}>
                  {name} [{lang}]
                </option>
              ))}
            </select>
          </label>
        </>
      ) : typeof window.speechSynthesis !== "undefined" ? (
        <p>
          Click&nbsp;
          <button
            type="button"
            onClick={() => {
              setVoices(window.speechSynthesis.getVoices());
            }}
          >
            load
          </button>
          &nbsp;to select speech synthesis voices.
        </p>
      ) : (
        <p>
          <strong>Your browser does not support SpeechSynthesis</strong>
        </p>
      )}
      <div style={{ display: "flex", gap: "5px" }}>
        <button type="button" disabled={state.isPlaying} onClick={play}>
          Play
        </button>
        <button type="button" disabled={!state.isPlaying} onClick={pause}>
          Pause
        </button>
        <button type="button" onClick={stop}>
          Stop
        </button>
        <button type="button" onClick={replay}>
          Replay
        </button>
      </div>
      <div className="flex flex-col">
        <label>
          Mute:{" "}
          <input
            disabled={state.isPlaying}
            type="checkbox"
            onChange={onMuteChanged}
          />
        </label>
        <label>
          <span style={{ width: 70 }}>Volume:</span>
          <input
            type="range"
            min="0.01"
            max="0.99"
            step="0.01"
            value={volume}
            disabled={state.isPlaying}
            onChange={onVolumeHandler}
          />
        </label>
        <label>
          <span style={{ width: 70 }}>Rate:</span>
          <input
            type="range"
            min="0.1"
            max="4"
            step="0.1"
            defaultValue="1"
            disabled={state.isPlaying}
            onChange={onRateHandler}
          />
          <span>{rate}</span>
        </label>
        <label>
          <span style={{ width: 70 }}>Pitch:</span>
          <input
            type="range"
            min="0"
            max="2"
            step="0.01"
            defaultValue="1"
            disabled={state.isPlaying}
            onChange={onPitchHandler}
          />
          <span>{pitch}</span>
        </label>
      </div>
    </div>
  );
};

export default PreviewUseTextToSpeechAdvancedDemo;
