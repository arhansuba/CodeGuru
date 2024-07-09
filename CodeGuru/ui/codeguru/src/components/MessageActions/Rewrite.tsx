import React, { useState } from 'react';
import './Rewrite.css';

interface Props {
  message: string;
}

const Rewrite: React.FC<Props> = ({ message }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedMessage, setEditedMessage] = useState(message);
  const [paraphrasedMessage, setParaphrasedMessage] = useState('');

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleParaphrase = () => {
    // Call API or use library to paraphrase message
    const paraphrased = paraphraseMessage(message);
    setParaphrasedMessage(paraphrased);
  };

  const paraphraseMessage = (message: string) => {
    // Implement paraphrasing logic here
    // For example, using a library like transformers
    const transformer = require('transformers');
    const paraphraser = new transformer.Paraphraser();
    return paraphraser.paraphrase(message);
  };

  return (
    <div className="rewrite">
      {editMode? (
        <textarea
          value={editedMessage}
          onChange={(e) => setEditedMessage(e.target.value)}
          placeholder="Edit message"
        />
      ) : (
        <p>{message}</p>
      )}
      <div className="actions">
        {editMode? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
        <button onClick={handleParaphrase}>Paraphrase</button>
        {paraphrasedMessage && (
          <p>
            Paraphrased: <span>{paraphrasedMessage}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Rewrite;