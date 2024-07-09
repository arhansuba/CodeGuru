
import React from 'react';
import './MessageBoxLoading.css';

const MessageBoxLoading: React.FC = () => {
  return (
    <div className="message-box-loading">
      <div className="loading-spinner">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="loading-text">Loading messages...</div>
    </div>
  );
};

export default MessageBoxLoading;