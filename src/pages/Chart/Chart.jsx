import { fetchTop100Albums } from '../../services/service';
import { useState, useEffect, lazy, Suspense, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchInput from './elements/SearchInput';
import SearchResultPage from './elements/SearchResult';
import Spinner from '../../components/Spinner';
import useSearch from '../../hook/useSearch';
import '../../styles/Chart.css';

const ChartList = lazy(() => import('./elements/ChartList'));

const Chart = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  const [originalAlbums, setOriginalAlbums] = useState([]);
  const { searchResult, handleSearch } = useSearch();

  const handleAlbumClick = useCallback((id) => {
    navigate(`/album/${id}`);
  }, []);

  // Filtering Funcntion
  const filterAlbums = (filterType) => {
    switch (filterType) {
      case 'default':
        setAlbums(originalAlbums);
        break;
      case 'ascending':
        setAlbums(
          [...albums].sort((a, b) =>
            a['im:name'].label.localeCompare(b['im:name'].label)
          )
        );
        break;
      case 'descending':
        setAlbums(
          [...albums].sort((a, b) =>
            b['im:name'].label.localeCompare(a['im:name'].label)
          )
        );
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const getTopAlbums = async () => {
      const response = await fetchTop100Albums();
      setAlbums(response); // 첫번째 렌더링시 보여줄 데이터 저장
      setOriginalAlbums(response); // 원래 데이터 저장
    };
    getTopAlbums();
  }, []);

  return (
    <div className="chart-container">
      <h1 className="chart-title">Top 100</h1>
      <div className="chart-search">
        <SearchInput onSearch={handleSearch} />
      </div>
      <div className="chart-filter-select">
        <select onChange={(event) => filterAlbums(event.target.value)}>
          <option value="default">기본</option>
          <option value="ascending">오름차순</option>
          <option value="descending">내림차순</option>
        </select>
      </div>
      {searchResult ? (
        <SearchResultPage result={searchResult} />
      ) : (
        <Suspense fallback={<Spinner />}>
          <ChartList albums={albums} handleAlbumClick={handleAlbumClick} />
        </Suspense>
      )}
    </div>
  );
};

export default Chart;
