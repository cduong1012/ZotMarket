import React, { useState } from 'react';
import '../../styles/MessagePanel.css';

function MessagePanel({ listing }) {
  const [messages, setMessages] = useState([
    { sender: 'seller', text: 'Hi! This is still available.' },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSend = () => {
    if (input.trim() === '') return;
    setMessages([...messages, { sender: 'buyer', text: input }]);
    setInput('');
    window.location.href = '/messages'; // Redirect to Messages page
  };
  

  return (
    <div className={`message-panel ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        💬 Message Seller
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="listing-context">
            <strong>{listing.name}</strong> – ${listing.price}
          </div>
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`msg ${msg.sender}`}>{msg.text}</div>
            ))}
          </div>
          <div className="input-row">
            <input 
              type="text" 
              placeholder="Type a message..." 
              value={input}
              onChange={(e) => setInput(e.target.value)} 
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MessagePanel;
