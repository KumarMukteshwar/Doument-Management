import React, { useState } from 'react';
import axios from '../services/api';

const DocumentUpload = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [uploading, setUploading] = useState(false); // Track upload status

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePublicChange = (event) => {
    setIsPublic(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!file || !name) {
      alert('Please provide a file and a name.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('name', name);
    formData.append('isPublic', isPublic);

    try {
      setUploading(true); // Set uploading state to true
      await axios.post('/api/documents/upload', formData); // Make sure this is the correct endpoint
      alert('Document uploaded successfully!');
      setFile(null);
      setName('');
      setIsPublic(false);
    } catch (error) {
      console.error('Error uploading document', error);
      alert('Failed to upload document. Please try again.');
    } finally {
      setUploading(false); // Reset uploading state
    }
  };

  return (
    <div className="document-upload">
      <h2>Upload Document</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <div>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Document Name"
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={handlePublicChange}
            />
            Public
          </label>
        </div>
        <div>
          <button type="submit" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Upload'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DocumentUpload;
