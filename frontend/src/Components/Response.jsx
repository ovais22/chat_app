import React from 'react';
import { useSelector } from 'react-redux';

function MessageDisplay() {
  const msg = useSelector((state) => state.store.data);

  return (
    <div className="p-4 text-black bg-gray-800">
      <h2 className="text-lg font-bold">Latest Message:</h2>
      <p>{msg?.text || "No message yet"}</p>
    </div>
  );
}

export default MessageDisplay;
