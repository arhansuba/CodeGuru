// MessageBox.tsx

import React from 'react';

interface Message {
  id: string;
  author: string;
  content: string;
  timestamp: string;
  type: 'text' | 'image' | 'video'; // Define the types of messages supported
}

interface MessageBoxProps {
  message: Message;
}

const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  const { author, content, timestamp, type } = message;

  return (
    <div className="message-box">
      <div className="message-header">
        <img className="author-avatar" src="/avatar.png" alt="Author Avatar" />
        <div className="message-meta">
          <div className="author-name">{author}</div>
          <div className="message-timestamp">{timestamp}</div>
        </div>
      </div>
      <div className="message-content">
        {type === 'text' && <p className="text-message">{content}</p>}
        {type === 'image' && <img className="image-message" src={content} alt="Image" />}
        {type === 'video' && (
          <video className="video-message" controls>
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
