import React from "react";
import type { Message } from "../../types";

interface MessageBubbleProps {
  message: Message;
  className?: string;
}
const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  className = "",
}) => {
  const isUser = message.sender === "user";
  return (
    <div className={`mb-4 ${className}`}>
      {/* message container  */}
      <div className={`flex ${isUser ? `justify-end` : `justify-start`}`}>
        {/* message bubble */}
        <div className="max-w-xs sm:max-w-md lg:max-w-lg">
          <div
            className={`
              rounded-2xl px-4 py-2 shadow-md
              ${
                isUser
                  ? "bg-sky-500/50 text-white rounded-br-md"
                  : "bg-gray-100 text-gray-800 rounded-bl-md"
              }
            `}
          >
            {message.isLoading ? (
              <div className="flex items-center space-x-1">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-current rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            ) : (
              <p className="text-sm leading-relaxed whitespace-pre-wrap">
                {message.content}
              </p>
            )}
          </div>
          {/* timestamp */}
          <div className={`mt-1 ${isUser ? "text-right" : "text-left"}`}>
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString("zh-CN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MessageBubble;
