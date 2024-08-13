import React from 'react';

import './styles/styles.css';
import DocumentList from './components/DocumentList';
import DocumentUpload from './components/DocumentUpload';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <div className="app-container">
      <h1>Document Management System</h1>
      <SearchBar />
      <DocumentUpload/>
      <DocumentList />
    </div>
  );
};

export default App;
