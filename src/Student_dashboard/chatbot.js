import React, { useState } from 'react';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', sender: 'bot' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;
    setMessages([...messages, { text: newMessage, sender: 'user' }]);
    // logic to send the message to a backend or process it
   
    setNewMessage('');
  };

  return (
    <div className="flex flex-col rounded-xl  h-[75vh]">
      <div className="flex-1 overflow-y-auto bg-gray-100 rounded-xl p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.sender === 'bot' ? 'bg-myRed text-white' : 'bg-myGray text-black'} p-2 mb-2 rounded-md`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex items-center bg-gray-200 p-4">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 rounded-md mr-2"
        />
        <button
          onClick={sendMessage}
          className="bg-myRed text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatbotScreen;
