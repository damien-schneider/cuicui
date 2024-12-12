// src/ChatListSimplified.tsx

"use client";

import { autoScrollListRef } from "@/cuicui/hooks/use-auto-scroll/use-auto-scroll";
import { useState, type KeyboardEvent } from "react";

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

  const sendMessage = () => {
    const trimmedInput = input.trim();
    if (trimmedInput === "") {
      return;
    }

    const userMessage: Message = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate AI response
    const aiResponse =
      "Sint nisi eu cillum nulla officia incididunt irure laboris enim cillum cupidatat occaecat. Duis adipisicing veniam exercitation quis anim. Exercitation consectetur tempor et consectetur dolor. Cupidatat culpa eiusmod ex enim occaecat dolor sunt. Et et commodo qui ipsum nostrud ut et incididunt est cupidatat excepteur laborum. Anim ullamco aliqua ad sit sint cupidatat esse esse.";
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 500);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-neutral-400/20 shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Chat Interface
      </h2>
      <ul
        ref={autoScrollListRef}
        className="h-80 overflow-y-auto p-4 bg-border border-neutral-400/20 rounded mb-4 space-y-2"
      >
        {messages.map((msg, index) => (
          <p
            key={msg.text}
            className={`p-2 rounded break-words ${
              msg.sender === "user"
                ? "bg-blue-400/20 self-end"
                : "bg-neutral-400/10"
            }`}
          >
            {msg.text}
          </p>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-neutral-400/20 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="button"
          onClick={sendMessage}
          className="px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-500 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default PreviewUseAutoScroll;