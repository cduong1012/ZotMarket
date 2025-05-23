import React from 'react';
import '../../styles/Messages.css';

function Messages() {
  return (
    <div className="messages-page">

      <div className="messages-container">
        {/* Sidebar */}
        <aside className="conversation-list">
          {[...Array(7)].map((_, i) => (
            <div className="conversation" key={i}>
              <div className="avatar" />
              <div className="text">
                <div className="name">Name</div>
                <div className="preview">Supporting line text lore...</div>
              </div>
              <div className="time">10 min</div>
            </div>
          ))}
        </aside>

        {/* Chat window */}
        <main className="chat-window">
          <div className="chat-header">
            <div>Name</div>
            <div className="icons">⚙️ 🔔</div>
          </div>
          <div className="chat-content">
            <div className="item-preview">
              <div className="item-image" />
              <div className="item-label">Calculator</div>
              <div className="item-msg">Is this available?</div>
            </div>
            <div className="chat-bubble left">Yes</div>
          </div>
          <div className="chat-input">
            <div className="input-icons">➕ 😀</div>
            <input type="text" placeholder="Type your message..." />
            <button className="mic-btn">🎤</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Messages;
