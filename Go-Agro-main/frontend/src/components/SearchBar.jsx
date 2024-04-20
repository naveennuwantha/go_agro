import { useState } from 'react';
import './SearchBar.css'

export const SearchBar = ({ onSearch }) => {

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    onSearch(searchTerm);
  };
  return (

    <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
      <input
        type="text"
        placeholder="Search..."
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <button>Search</button>
    </div>

  )
}
