import React, { useState } from 'react';
import './Attach.css';

interface Props {
  onAttach: (files: File[]) => void;
}

const Attach: React.FC<Props> = ({ onAttach }) => {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleDragEnter = () => {
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleFiles = (files: File[]) => {
    setFiles(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviews(previews);
    onAttach(files);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    handleFiles(files);
  };

  return (
    <div className="attach">
      <div
        className={`drop-zone ${dragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <p>Drag and drop files or click to upload</p>
        <input type="file" multiple onChange={handleInputChange} />
      </div>
      <div className="previews">
        {previews.map((preview, index) => (
          <img key={index} src={preview} alt="File preview" />
        ))}
      </div>
    </div>
  );
};

export default Attach;