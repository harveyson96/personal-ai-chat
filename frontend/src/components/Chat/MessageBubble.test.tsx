// src/components/Chat/MessageBubble.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import MessageBubble from "./MessageBubble";
import type { Message } from "../../types";

const mockMessage: Message[] = [
  {
    id: "1",
    content: "Hello, this is a test message",
    sender: "user",
    timestamp: new Date(Date.now() - 180000),
  },

  {
    id: "2",
    content: "中文内容测试",
    sender: "user",
    timestamp: new Date(Date.now() - 120000),
  },
  {
    id: "3",
    content: "Hello, this is a test message from ai",
    sender: "ai",
    timestamp: new Date(Date.now() - 90000),
  },
  {
    id: "4",
    content:
      "这是一条很长的消息用来测试文本换行效果。当消息内容很长时，我们需要确保它能够正确地在消息气泡内换行，而不会超出屏幕边界。同时也要测试中英文混合、数字123和特殊符号！@#的显示效果。",
    sender: "user",
    timestamp: new Date(Date.now() - 60000),
  },
];

describe("MessageBubble", () => {
  test("renders message content", () => {
    render(<MessageBubble message={mockMessage} />);
    expect(
      screen.getByText("Hello, this is a test message")
    ).toBeInTheDocument();
  });
  test("applies correct styles for user message", () => {
    render(<MessageBubble message={mockMessage} />);
    const messageElement = screen.getByText("Hello, this is a test message");
    expect(messageElement.closest(".bg-primary-500")).toBeInTheDocument();
  });
});
