"use client";

import ReactMarkdown from "react-markdown";

import { motion } from "framer-motion";

import { Message } from "@/types/chat";

interface Props {
  message: Message;
}

export default function ChatMessage({ message }: Props) {
  const isUser = message.role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-3xl rounded-2xl px-4 py-3
          ${
            isUser
              ? "bg-blue-600 text-white"
              : "bg-zinc-800 text-zinc-100"
          }
        `}
      >
        <ReactMarkdown>
          {message.content}
        </ReactMarkdown>

        {message.sources && (
          <div className="mt-4 border-t border-zinc-700 pt-3">
            <p className="mb-2 text-sm text-zinc-400">
              Sources
            </p>

            <div className="space-y-1">
              {message.sources.map((source, index) => (
                <div
                  key={index}
                  className="text-xs text-zinc-400"
                >
                  {source.source} — Page {source.page}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}