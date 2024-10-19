import { useState, useEffect, type ChangeEvent } from "react";

export const TextToSpeech = ({ text }: { text: string }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<null | SpeechSynthesisUtterance>(
    null,
  );
  const [voice, setVoice] = useState<null | SpeechSynthesisVoice>(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    setUtterance(u);

    // Add an event listener to the speechSynthesis object to listen for the voiceschanged event
    synth.addEventListener("voiceschanged", () => {
      const voices = synth.getVoices();
      setVoice(voices[0]);
    });

    return () => {
      synth.cancel();
      synth.removeEventListener("voiceschanged", () => {
        setVoice(null);
      });
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      if (!utterance) {
        return;
      }
      utterance.voice = voice;
      utterance.pitch = pitch;
      utterance.rate = rate;
      utterance.volume = volume;
      synth.speak(utterance);
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    setIsPaused(false);
    synth.cancel();
  };

  const handleVoiceChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const voices = window.speechSynthesis.getVoices();
    setVoice(voices.find((v) => v.name === event.target.value) ?? null);
  };

  const handlePitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPitch(Number.parseFloat(event.target.value));
  };

  const handleRateChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRate(Number.parseFloat(event.target.value));
  };

  const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number.parseFloat(event.target.value));
  };

  return (
    <div>
      <label>
        <span>Voice:</span>
        <select value={voice?.name} onChange={handleVoiceChange}>
          {window.speechSynthesis.getVoices().map((voice) => (
            <option key={voice.name} value={voice.name}>
              {voice.name}
            </option>
          ))}
        </select>
      </label>

      <br />

      <label>
        <span>Pitch:</span>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={pitch}
          onChange={handlePitchChange}
        />
      </label>

      <br />

      <label>
        <span>Speed:</span>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={rate}
          onChange={handleRateChange}
        />
      </label>
      <br />
      <label>
        <span>Volume:</span>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={handleVolumeChange}
        />
      </label>

      <br />

      <button type="button" onClick={handlePlay}>
        {isPaused ? "Resume" : "Play"}
      </button>
      <button type="button" onClick={handlePause}>
        Pause
      </button>
      <button type="button" onClick={handleStop}>
        Stop
      </button>
    </div>
  );
};
