import React, { useState } from "react";
import "../styling/FileUpload.css";

function FileUpload() {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // ref to the file input element
  const fileInputRef = React.createRef();

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      setFiles(Array.from(droppedFiles));
      setError("");
      setSuccess("");
    }
  };

  const handleDoubleClick = () => {
    fileInputRef.current.click();
  };

  const handleUpload = () => {
    if (files.length === 0) {
      setError("Please select files to upload.");
      return;
    }

    setUploading(true);
    setError("");
    setSuccess("");

    setTimeout(() => {
      setUploading(false);
      setSuccess("Files uploaded successfully!");
      setFiles([]);
    }, 2000);
  };

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
      setError("");
      setSuccess("");
    }
  };

  const handleDeleteFile = (fileName) => {
    setFiles(files.filter((file) => file.name !== fileName));
  };

  return (
    <div className="home">
      <div className="Intro">
        <h1>Automated Data Extraction and Invoice Management</h1>
        <p>
          This application streamlines the process of extracting, processing,
          and managing invoice data from various file formats. The extracted
          data is organized into three main sections: <strong>Invoices</strong>,{" "}
          <strong>Products</strong>, and <strong>Customers</strong>. Using
          Redux, changes are synchronized in real-time for consistent updates
          across all tabs.
        </p>
      </div>

      <div className="file-upload-container">
        <h2>Upload Your Files</h2>
        <div
          className="file-upload-box"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDoubleClick={handleDoubleClick}
        >
          <div className="file-upload-area">
            <p>Drag & Drop or Double click to select Files</p>
            <input
              type="file"
              className="file-input"
              onChange={handleFileChange}
              accept="image/*, .pdf, .xlsx"
              multiple
              ref={fileInputRef}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
        </div>
        {files.length > 0 && (
          <div className="file-list">
            <h3>Selected Files:</h3>
            <ul>
              {files.map((file, index) => (
                <li key={index}>
                  <span>{file.name}</span>
                  <button
                    className="delete-button"
                    onClick={() => handleDeleteFile(file.name)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="upload-button"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload Files"}
        </button>
      </div>
      <div className="personal-info">
        <h2>About the Developer</h2>
        <p>
          Hi, I'm <strong>Gaurav Naval</strong>, a passionate software developer.
          I am an avid learner, specializing in building scalable and
          user-friendly applications. <br></br> Feel free to connect with me!
        </p>
        <ul>
          <li>
            Email:{" "}
            <a href="mailto:gauravnaval003@gmail.com">gauravnaval003@gmail.com</a>
          </li>
          <li>
            GitHub:{" "}
            <a
              href="https://github.com/Naval2217"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Naval2217
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/gaurav-naval/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gaurav-naval
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FileUpload;
