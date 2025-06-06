// src/components/Test/ComponentTestPage.tsx
import React from "react";
import MessageBubble from "../Chat/MessageBubble";
import { Message } from "../../types";

const ComponentTestPage: React.FC = () => {
  const testMessages: Message[] = [
    {
      id: "1",
      content: "你好！我是你的AI助手，有什么可以帮你的吗？",
      sender: "ai",
      timestamp: new Date(Date.now() - 180000),
    },
    {
      id: "2",
      content: "你好！我想测试一下这个聊天界面的功能。",
      sender: "user",
      timestamp: new Date(Date.now() - 120000),
    },
    {
      id: "3",
      content:
        "这是一条很长的消息用来测试文本换行效果。当消息内容很长时，我们需要确保它能够正确地在消息气泡内换行，而不会超出屏幕边界。同时也要测试中英文混合、数字123和特殊符号！@#的显示效果。",
      sender: "user",
      timestamp: new Date(Date.now() - 90000),
    },
    {
      id: "4",
      content: "收到！界面看起来工作正常。✅",
      sender: "ai",
      timestamp: new Date(Date.now() - 60000),
    },
    {
      id: "5",
      content: "短消息",
      sender: "user",
      timestamp: new Date(Date.now() - 30000),
    },
    {
      id: "6",
      content: "",
      sender: "ai",
      timestamp: new Date(),
      isLoading: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            组件测试页面
          </h1>
          <p className="text-gray-600">MessageBubble 组件开发测试</p>
        </div>

        {/* 主测试区域 */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 聊天预览 */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">
                  对话预览
                </h2>
              </div>
              <div className="p-6 h-96 overflow-y-auto">
                {testMessages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
              </div>
            </div>
          </div>

          {/* 测试说明 */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-gray-800 mb-3">🧪 测试清单</h3>
              <div className="space-y-2 text-sm">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  用户消息右对齐（蓝色）
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  AI消息左对齐（灰色）
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  长文本正确换行
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  时间戳显示正确
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  加载动画正常
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  移动端响应式
                </label>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-medium text-blue-800 mb-2">💡 测试提示</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 调整浏览器窗口大小</li>
                <li>• 使用开发者工具切换设备</li>
                <li>• 检查各种消息长度</li>
                <li>• 验证加载状态动画</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTestPage;
