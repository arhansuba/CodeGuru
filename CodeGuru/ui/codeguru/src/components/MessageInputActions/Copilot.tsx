import React, { useState, useEffect } from 'react';
import './Copilot.css';
import { api } from '../api';

interface Props {
  message: string;
  onChange: (message: string) => void;
}

const Copilot: React.FC<Props> = ({ message, onChange }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState<number | null>(null);

  useEffect(() => {
    const fetchSuggestions = async () => {
      const response = await api.getSuggestions(message);
      setSuggestions(response.data);
    };
    fetchSuggestions();
  }, [message]);

  const handleSuggestionClick = (index: number) => {
    const suggestion = suggestions[index];
    const newMessage = message + suggestion;
    onChange(newMessage);
    setSelectedSuggestion(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      if (selectedSuggestion === null) {
        setSelectedSuggestion(0);
      } else {
        setSelectedSuggestion((selectedSuggestion + 1) % suggestions.length);
      }
    } else if (e.key === 'ArrowUp') {
      if (selectedSuggestion === null) {
        setSelectedSuggestion(suggestions.length - 1);
      } else {
        setSelectedSuggestion((selectedSuggestion - 1 + suggestions.length) % suggestions.length);
      }
    } else if (e.key === 'Enter') {
      if (selectedSuggestion!== null) {
        handleSuggestionClick(selectedSuggestion);
      }
    }
  };

  return (
    <div className="copilot">
      <div className="suggestions">
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={`suggestion ${selectedSuggestion === index? 'elected' : ''}`}
            onClick={() => handleSuggestionClick(index)}
          >
            {suggestion}
          </div>
        ))}
      </div>
      <div className="editor" onKeyDown={handleKeyDown}>
        <textarea value={message} onChange={(e) => onChange(e.target.value)} />
      </div>
    </div>
  );
};

export default Copilot;