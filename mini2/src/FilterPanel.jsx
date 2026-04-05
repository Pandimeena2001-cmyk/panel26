import React, { useState } from "react";
import "./App.css";

function FilterPanel() {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
    available: false,
  });

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="container">
      <h1>Filter Panel</h1>

      {/* Category Select */}
      <label>Category:</label>
      <select
        name="category"
        value={filters.category}
        onChange={handleFilterChange}
      >
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
        <option value="books">Books</option>
      </select>

      {/* Min Price Input */}
      <label>Minimum Price:</label>
      <input
        type="number"
        name="minPrice"
        value={filters.minPrice}
        onChange={handleFilterChange}
      />

      {/* Checkbox */}
      <label className="checkbox-label">
        <input
          type="checkbox"
          name="available"
          checked={filters.available}
          onChange={handleFilterChange}
        />
        In Stock Only
      </label>

      {/* Live State Display */}
      <div className="preview">
        <h2>Live Filters State</h2>
        <pre>{JSON.stringify(filters, null, 2)}</pre>
      </div>
    </div>
  );
}

export default FilterPanel;