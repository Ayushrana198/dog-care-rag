"use client";

import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
  loading: boolean;
}

export default function ChatInput({
  onSend,
  loading,
}: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-2">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about dog care..."
        className="
          flex-1 rounded-xl border border-zinc-700
          bg-zinc-900 px-4 py-3 text-white
          outline-none
        "
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        className="
          rounded-xl bg-blue-600 px-5 py-3
          font-medium text-white
          hover:bg-blue-700
          disabled:opacity-50
        "
      >
        Send
      </button>
    </div>
  );
}