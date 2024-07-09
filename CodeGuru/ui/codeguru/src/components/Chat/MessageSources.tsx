import React from 'react';
import './MessageSources.css';

interface MessageSource {
  id: string;
  name: string;
  type: 'user' | 'bot' | 'external';
  avatarUrl?: string;
}

interface MessageSourcesProps {
  sources: MessageSource[];
}

const MessageSources: React.FC<MessageSourcesProps> = ({ sources }) => {
  return (
    <div className="message-sources">
      {sources.map((source) => (
        <div key={source.id} className="message-source">
          {source.avatarUrl && (
            <img src={source.avatarUrl} alt={source.name} className="message-source-avatar" />
          )}
          <div className="message-source-info">
            <span className="message-source-name">{source.name}</span>
            <span className="message-source-type">
              {source.type === 'user'? (
                <i className="fas fa-user" />
              ) : source.type === 'bot'? (
                <i className="fas fa-robot" />
              ) : (
                <i className="fas fa-globe" />
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageSources;