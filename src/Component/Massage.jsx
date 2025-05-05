import React from 'react';

const fakeMessages = [
  { id: 1, sender: 'me', text: 'Hey! How are you doing?' },
  { id: 2, sender: 'them', text: 'I’m doing great! What about you?' },
  { id: 3, sender: 'me', text: 'I’m good too. Just working on a React project.' },
  { id: 4, sender: 'them', text: 'Nice! Show me when you’re done.' },
  { id: 5, sender: 'me', text: 'Sure, will do!' },
];

function MessageBox() {
  return (
    <div className="max-w-md mx-auto h-[500px] border rounded-lg shadow p-4 flex flex-col justify-between bg-white">
      <div className="overflow-y-auto space-y-3 mb-4">
        {fakeMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === 'me' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-[75%] px-4 py-2 rounded-lg text-white ${
                msg.sender === 'me'
                  ? 'bg-blue-600 rounded-br-none'
                  : 'bg-gray-500 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input box (fake, not functional) */}
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Send
        </button>
      </div>
    </div>
  );
}

export default MessageBox;
