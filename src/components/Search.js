import React, { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    props.searchProjects(term);

    // If the search term is empty, trigger a function to reset the list
    if (!term) {
      props.resetList(); // Ensure that resetList is defined and passed down as a prop
    }
  };

  // Handle sort option change
  const handleSortChange = (e) => {
    const type = e.target.value;
    setSortType(type);
    props.sortProjects(type);
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
