import React, { useState } from 'react';
import SearchbarCss from './SearchbarCss.module.css';

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
  };

  return (
    <header className={SearchbarCss.Searchbar}>
      <form className={SearchbarCss.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={SearchbarCss.SearchFormButton}>
          <span className={SearchbarCss.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={SearchbarCss.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;