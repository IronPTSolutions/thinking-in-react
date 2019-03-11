import React from 'react'

const SearchBar = ({ search, setSearch, setSearchStock }) => (
  <div className="center">
    <div>
      <h3>Search</h3>
    </div>
    <div className="unit-container">
      <input
        value={search}
        onChange={event => setSearch(event.target.value)}
        class="form-control form-control-lg"
        type="text"
      />
    </div>
    <div>
      <input
        onChange={event => setSearchStock(event.target.checked)}
        type="checkbox"
        class="form-check-input"
      />
      <label>Only show products on stock</label>
    </div>
  </div>
)

export default SearchBar
