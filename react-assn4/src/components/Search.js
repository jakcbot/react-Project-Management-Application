import React, { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    props.searchProjects(e.target.value);
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortType(e.target.value);
    props.sortProjects(e.target.value);
  };

  return (
    <div className="search-sort">
      <div className="search">
        <label htmlFor="searchInput">Search:</label>
        <input
          type="text"
          id="searchInput"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search projects..."
        />
      </div>
      <div className="sort">
        <label htmlFor="sortSelect">Sort by:</label>
        <select id="sortSelect" value={sortType} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="name_asc">Name (A-Z)</option>
          <option value="name_desc">Name (Z-A)</option>
          <option value="start_date_asc">Start Date (Earliest First)</option>
          <option value="start_date_desc">Start Date (Latest First)</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
