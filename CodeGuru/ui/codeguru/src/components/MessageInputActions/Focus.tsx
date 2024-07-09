import React, { useState } from 'react';
import './Focus.css';

interface Props {
  messages: { id: string; text: string }[];
  onMark: (messageId: string) => void;
  onUnmark: (messageId: string) => void;
}

const Focus: React.FC<Props> = ({ messages, onMark, onUnmark }) => {
  const [markedMessages, setMarkedMessages] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMark = (messageId: string) => {
    setMarkedMessages((prevMarkedMessages) => [...prevMarkedMessages, messageId]);
    onMark(messageId);
  };

  const handleUnmark = (messageId: string) => {
    setMarkedMessages((prevMarkedMessages) =>
      prevMarkedMessages.filter((id) => id!== messageId)
    );
    onUnmark(messageId);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredMessages = messages.filter((message) => {
    const text = message.text.toLowerCase();
    const query = searchQuery.toLowerCase();
    return text.includes(query);
  });

  return (
    <div className="focus">
      <input
        type="search"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search messages"
      />
      <ul>
        {filteredMessages.map((message) => (
          <li key={message.id}>
            <div
              className={`message ${markedMessages.includes(message.id)? 'arked' : ''}`}
            >
              {message.text}
            </div>
            <button onClick={() => handleMark(message.id)}>Mark</button>
            <button onClick={() => handleUnmark(message.id)}>Unmark</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Focus;