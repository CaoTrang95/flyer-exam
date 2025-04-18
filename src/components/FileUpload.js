import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = ({ onSetFileName }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onSetFileName(file.name);
    }
  };

  return (
    <div className="file-upload-container">
      <input type="file" id="fileInput" onChange={handleFileChange} style={{ display: "none" }} accept=".mp3, .mp4" />
      <label htmlFor="fileInput" className="file-upload-button">
        Chọn File
      </label>
      {fileName && <p className="file-name">{fileName}</p>}
    </div>
  );
};

export default FileUpload;
