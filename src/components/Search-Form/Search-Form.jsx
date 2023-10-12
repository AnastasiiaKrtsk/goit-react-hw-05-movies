import React from 'react';
const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Movie search</h2>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
    </form>
  );
};

export default SearchForm;
