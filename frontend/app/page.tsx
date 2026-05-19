"use client";

import { useState } from "react";

import ChatInput from "@/components/chat/chat-input";
import ChatMessage from "@/components/chat/chat-message";

import { chatWithBot } from "@/services/api";

import { Message } from "@/types/chat";

export default function HomePage() {
  const [messages, setMessages] = useState<Message[]>([]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async (message: string) => {
    try {
      setLoading(true);

      const userMessage: Message = {
        role: "user",
        content: message,
      };

      setMessages((prev) => [...prev, userMessage]);

      const response = await chatWithBot(message);

      const assistantMessage: Message = {
        role: "assistant",
        content: response.answer,
        sources: response.sources,
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex h-screen flex-col">
      <div className="border-b border-zinc-800 p-4">
        <h1 className="text-2xl font-bold">
          Dog Care AI Assistant
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="mx-auto flex max-w-4xl flex-col gap-4">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message}
            />
          ))}

          {loading && (
            <div className="text-zinc-400">
              Thinking...
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-zinc-800 p-4">
        <div className="mx-auto max-w-4xl">
          <ChatInput
            onSend={sendMessage}
            loading={loading}
          />
        </div>
      </div>
    </main>
  );
}