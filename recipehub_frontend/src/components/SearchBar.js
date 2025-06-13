import React, { useState } from 'react';
import './SearchBar.css';

// PUBLIC_INTERFACE
function SearchBar() {
  const [query, setQuery] = useState('');

  // Handler for input changes
  const handleChange = (e) => setQuery(e.target.value);

  // Handler for search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Perform search (lift query up in parent if needed)
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        aria-label="Search recipes"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search recipes..."
      />
      <button type="submit" aria-label="Submit search">
        <span role="img" aria-label="search">🔍</span>
      </button>
    </form>
  );
}

export default SearchBar;
