import { useCallback, useState, useEffect } from 'react';
import { fetchSearchAlbum } from '../services/service';
import debounce from '../utils/debounce';

const useSearch = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const fetchData = async (searchText) => {
    try {
      setIsLoading(true);
      const response = await fetchSearchAlbum(searchText);
      setSearchResult(response);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchText.length > 0) {
      fetchData(searchText);
    } else {
      setSearchResult(null);
    }
  }, [searchText]);

  const handleSearch = useCallback(
    debounce((searchText) => {
      setSearchText(searchText);
    }, 500),
    []
  );

  return { searchResult, isLoading, isError, handleSearch };
};

export default useSearch;
