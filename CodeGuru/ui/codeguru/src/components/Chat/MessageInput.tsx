import React, { useState } from 'react';
import './MessageInput.css';
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode, Key } from 'react';

interface MessageInputProps {
  onSendMessage: (message: string, files: File[]) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState<File[]>([]);
  const [fileInputKey, setFileInputKey] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles([...files,...e.target.files]);
    setFileInputKey(fileInputKey + 1);
  };

  const handleSend = () => {
    onSendMessage(message, files);
    setMessage('');
    setFiles([]);
  };

  return (
    <div className="message-input">
      <textarea
        value={message}
        onChange={handleInputChange}
        placeholder="Type a message..."
        className="message-input-textarea"
      />
      <div className="message-input-attachments">
        {files.map((file: { name: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
          <div key={index} className="message-input-attachment">
            <span>{file.name}</span>
            <button
              onClick={() => {
                setFiles(files.filter((f: any, i: any) => i!== index));
              }}
            >
              <i className="fas fa-times" />
            </button>
          </div>
        ))}
        <input
          type="file"
          multiple
          onChange={handleFileChange}
          key={fileInputKey}
          className="message-input-file-input"
        />
        <button className="message-input-attachment-button">
          <i className="fas fa-paperclip" />
        </button>
      </div>
      <button className="message-input-send-button" onClick={handleSend}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;