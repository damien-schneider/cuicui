// import { useCallback, useEffect, useState } from "react";

// // Define custom types for SpeechRecognition and SpeechRecognitionEvent
// interface ISpeechRecognitionEvent extends Event {
//   results: SpeechRecognitionResultList;
//   resultIndex: number;
// }

// interface ISpeechRecognition extends EventTarget {
//   lang: string;
//   continuous: boolean;
//   interimResults: boolean;
//   maxAlternatives: number;
//   start: () => void;
//   stop: () => void;
//   onresult: (event: ISpeechRecognitionEvent) => void;
//   onerror: (event: Event) => void;
//   onend: () => void;
// }

// declare global {
//   interface Window {
//     speechRecognition: new () => ISpeechRecognition;
//     webkitSpeechRecognition: new () => ISpeechRecognition;
//   }
// }

// interface UseSpeechToTextProps {
//   lang?: string;
//   continuous?: boolean;
//   interimResults?: boolean;
//   maxAlternatives?: number;
//   onResult?: (result: string) => void;
//   onError?: (error: string) => void;
// }

// export const useSpeechToText = ({
//   lang = "en-US",
//   continuous = true,
//   interimResults = true,
//   maxAlternatives = 1,
//   onResult,
//   onError,
// }: UseSpeechToTextProps = {}) => {
//   const [isListening, setIsListening] = useState(false);
//   const [transcript, setTranscript] = useState("");
//   const [lastProcessedIndex, setLastProcessedIndex] = useState(0);

//   const recognition: ISpeechRecognition | null =
//     typeof window !== "undefined" &&
//     (window.speechRecognition || window.webkitSpeechRecognition)
//       ? new (window.speechRecognition || window.webkitSpeechRecognition)()
//       : null;

//   const handleResult = useCallback(
//     (event: ISpeechRecognitionEvent) => {
//       let interimTranscript = "";
//       let finalTranscript = "";

//       // Iterate through all the current results
//       for (let i = lastProcessedIndex; i < event.results.length; i++) {
//         const result = event.results[i];
//         // If the result is final, append to the final transcript
//         if (result.isFinal) {
//           finalTranscript += `${result[0].transcript} `;
//           setLastProcessedIndex(i + 1);
//         } else {
//           // Otherwise, append to the interim transcript
//           interimTranscript += `${result[0].transcript} `;
//         }
//       }

//       // Update the transcript state with a combination of the final and interim results
//       setTranscript(transcript + finalTranscript + interimTranscript);

//       // Invoke callback with the latest transcript
//       onResult?.(transcript + finalTranscript + interimTranscript);
//     },
//     [onResult, transcript, lastProcessedIndex],
//   );

//   // start and stop functions using useCallback
//   const start = useCallback(() => {
//     if (!recognition || isListening) {
//       return;
//     }
//     setTranscript("");
//     setLastProcessedIndex(0);
//     setIsListening(true);
//     recognition.start();
//   }, [recognition, isListening]);

//   const stop = useCallback(() => {
//     if (!(recognition && isListening)) {
//       return;
//     }
//     recognition.stop();
//     setIsListening(false);
//   }, [recognition, isListening]);

//   useEffect(() => {
//     if (!recognition) {
//       onError &&
//         onError("Speech recognition is not supported in this browser.");
//       return;
//     }

//     recognition.lang = lang;
//     recognition.continuous = continuous;
//     recognition.interimResults = interimResults;
//     recognition.maxAlternatives = maxAlternatives;
//     recognition.onresult = handleResult;
//     recognition.onerror = (event) => onError?.(event.type);
//     recognition.onend = () => {
//       setIsListening(false);
//     };

//     return () => {
//       if (isListening) {
//         recognition.stop();
//       }
//     };
//   }, [
//     lang,
//     continuous,
//     interimResults,
//     maxAlternatives,
//     handleResult,
//     onError,
//     recognition,
//     start,
//     stop,
//     isListening,
//   ]);

//   return { start, stop, transcript, isListening };
// };

// export default useSpeechToText;
