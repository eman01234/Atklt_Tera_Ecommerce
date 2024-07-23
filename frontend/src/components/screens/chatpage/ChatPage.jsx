import React, { useState } from "react";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "customer" }]);
      setNewMessage("");
      // Simulate merchant response for demonstration
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Hello! How can I help you?", sender: "merchant" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Customer support Chat
        </h2>
        <div className="flex flex-col h-96 overflow-y-scroll mb-4 p-4 border rounded-lg bg-gray-50">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex mb-2 ${
                message.sender === "customer" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-2 rounded-lg max-w-xs ${
                  message.sender === "customer"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Type your message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-primary text-white rounded-r-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
