import React from 'react';
import ChatDisplay from './Components/ChatDisplay';
import InputBox from './Components/InputBox';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ChatDisplay />
      <InputBox />
    </div>
  );
}

export default App;
