// src/ChatListSimplified.tsx

"use client";

import { autoScrollListRef } from "@/cuicui/hooks/use-auto-scroll";
import { useState, useRef, useEffect, type KeyboardEvent } from "react";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const PreviewUseAutoScroll = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: "ai", text: "Welcome to the chat!" },
    { sender: "ai", text: "Feel free to add new messages." },
  ]);
  const [input, setInput] = useState("");

  const typingIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const sendMessage = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      return;
    }

    const userMessage: Message = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    const aiResponse = `Sint nisi eu cillum nulla officia incididunt irure laboris enim cillum cupidatat occaecat. 
Duis adipisicing veniam exercitation quis anim. Exercitation consectetur tempor et consectetur dolor. 
Cupidatat culpa eiusmod ex enim occaecat dolor sunt. Et et commodo qui ipsum nostrud ut et incididunt est cupidatat excepteur laborum. 
Anim ullamco aliqua ad sit sint cupidatat esse esse.`;

    // Break down the AI response into words
    const words = aiResponse.split(" ");
    let currentWordIndex = 0;

    // Add a placeholder AI message first, so we have something to update
    const newAiMessageIndex = messages.length + 1; // next index after user's message
    setMessages((prev) => [...prev, { sender: "ai", text: "" }]);

    // Type out each word at a fixed interval
    typingIntervalRef.current = setInterval(() => {
      setMessages((prevMessages) => {
        // Ensure the AI message exists
        if (!prevMessages[newAiMessageIndex]) {
          return prevMessages;
        }

        // Update the AI message with the next word
        const updatedMessages = [...prevMessages];
        const currentAiMessage = updatedMessages[newAiMessageIndex];

        currentAiMessage.text +=
          (currentAiMessage.text ? " " : "") + words[currentWordIndex];

        currentWordIndex++;

        // If we've reached the end of all words, clear the interval
        if (currentWordIndex >= words.length) {
          if (typingIntervalRef.current) {
            clearInterval(typingIntervalRef.current);
            typingIntervalRef.current = null;
          }
        }

        return updatedMessages;
      });
    }, 100); // 100ms per word
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup if component unmounts
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-md w-full mx-auto mt-10 p-4 bg-neutral-50 dark:bg-neutral-800 border border-neutral-400/20 rounded-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Chat Interface
      </h2>
      <MessageList messages={messages} />
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="rounded-lg bg-neutral-400/20 border border-neutral-400/20 w-full placeholder:text-neutral-400"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="rounded-lg bg-neutral-400/20 border border-neutral-400/20 px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <ul
      ref={autoScrollListRef}
      className="h-80 overflow-y-auto mb-4 space-y-2 rounded-md"
    >
      {messages.map((msg, index) => (
        <MessageItem key={`${index}-${msg.sender}-${msg.text}`} message={msg} />
      ))}
    </ul>
  );
};

interface MessageItemProps {
  message: Message;
}

const MessageItem = ({ message }: MessageItemProps) => {
  return (
    <li
      className={`p-2 rounded-md break-words ${
        message.sender === "user"
          ? "bg-sky-400/10 self-end border border-sky-400/20"
          : "bg-white dark:bg-neutral-400/10 border border-neutral-400/20"
      }`}
    >
      {message.text}
    </li>
  );
};

export default PreviewUseAutoScroll;
