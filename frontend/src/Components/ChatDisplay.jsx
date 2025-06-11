import React from 'react';
import { useSelector } from 'react-redux';

function ChatDisplay() {
  const messages = useSelector(state => state.chat.messages);

  return (
    <div className="p-4 mb-15 max-w-4xl mx-auto space-y-3">
      {messages.map(msg => (
        <div
          key={msg.id}
          className={`p-3 rounded-lg ${
            msg.sender === 'user' ? 'bg-gray-400 text-black self-end' : 'bg-gray-700 text-white self-start'
          }`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default ChatDisplay;
