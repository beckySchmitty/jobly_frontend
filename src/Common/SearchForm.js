import React, { useState } from "react";

// Search Widget for CompanyList and JobList

function SearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

//   Update form fields
  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
              name="searchTerm"
              placeholder="Search For"
              value={searchTerm}
              onChange={handleChange}
          />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
  );
}

export default SearchForm;
