import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserMessage, addBotMessage, markFirstMessageHandled, slugChange } from '../features/storeSlice';
import { initiate_chat, chat } from '../api_backend/api_backend';

function InputBox() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const isFirstMessage = useSelector(state => state.chat.isFirstMessage);

  const handleSend = async () => {
    if (!input.trim()) return;

    dispatch(addUserMessage(input));

// import { initiate_chat, chat } from './api_backend/api_backend'


// const res = await initiate_chat("hello")
// const slug = res.data.slug
// const content = res.data.query
// console.log(content)

// const res2 = await chat("hello", slug)
// console.log(res2)

    let response;
    if (isFirstMessage) {
      const res = await initiate_chat(input);
      const slug = res.data.slug
      dispatch(slugChange(slug));
      // const content = res.data.query
      const res2 = await chat(input, slug);
      response = res2.data
      dispatch(markFirstMessageHandled());
    } else {
      const res2 = await chat(input);
      response = res2.data
    }

    dispatch(addBotMessage(response));
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-950 p-4">
      <div className="max-w-4xl mx-auto flex items-center gap-2">
        <input
          type="text"
          className="w-full p-2 flex justify-center px-4 rounded-4xl bg-gray-900 text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
        />
        <button
          className="bg-amber-50 text-black px-4 py-2 rounded-4xl"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default InputBox;
