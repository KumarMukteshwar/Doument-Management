import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', query);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documents..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
