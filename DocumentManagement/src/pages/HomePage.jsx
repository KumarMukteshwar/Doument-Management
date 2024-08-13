import React, { useState, useEffect } from 'react';
import DocumentUpload from '../components/DocumentUpload';
import DocumentList from '../components/DocumentList';
import SearchBar from '../components/SearchBar';
import { getDocuments } from '../api/documentApi';

function HomePage() {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchDocuments() {
      const fetchedDocuments = await getDocuments();
      setDocuments(fetchedDocuments);
      setFilteredDocuments(fetchedDocuments);
    }

    fetchDocuments();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (term) {
      const results = documents.filter((doc) =>
        doc.name.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredDocuments(results);
    } else {
      setFilteredDocuments(documents);
    }
  };

  return (
    <div className="homepage">
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <DocumentUpload />
      <DocumentList documents={filteredDocuments} />
    </div>
  );
}

export default HomePage;
