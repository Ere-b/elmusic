import { useState, useCallback } from 'react';
import '../../../styles/SearchInput.css';
import Search from '../../../assets/search.webp';

const SearchInput = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = useCallback((e) => {
    setSearchText(e.target.value);
  }, []);

  const handleSearch = useCallback(() => {
    onSearch(searchText);
  }, [onSearch, searchText]);

  return (
    <div className="search-wrapper">
      <input
        type="search"
        className="search-input"
        value={searchText}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
      />
      <button className="search-btn" onClick={handleSearch}>
        <img src={Search} />
      </button>
    </div>
  );
};

export default SearchInput;
