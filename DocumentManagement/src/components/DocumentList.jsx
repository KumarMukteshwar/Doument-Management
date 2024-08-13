import React, { useEffect, useState } from 'react';
import axios from '../services/api';

const DocumentList = () => {
  const [documents, setDocuments] = useState([]);
  const [publicDocuments, setPublicDocuments] = useState([]);
  const [privateDocuments, setPrivateDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const res = await axios.get('/documents');
        setDocuments(res.data);
      } catch (error) {
        console.error('Error fetching documents', error);
      }
    };

    fetchDocuments();
  }, []);

  useEffect(() => {
    setPublicDocuments(documents.filter(doc => doc.isPublic));
    setPrivateDocuments(documents.filter(doc => !doc.isPublic));
  }, [documents]);

  const handleLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  return (
    <div className="document-list">
      <h2>Public Documents</h2>
      <ul>
        {publicDocuments.map(doc => (
          <li key={doc._id}>
            <a href={doc.file} onClick={(e) => handleLinkClick(e, doc.file)}>{doc.name}</a>
          </li>
        ))}
      </ul>

      <h2>Private Documents</h2>
      <ul>
        {privateDocuments.map(doc => (
          <li key={doc._id}>
            <a href={doc.file} onClick={(e) => handleLinkClick(e, doc.file)}>{doc.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
