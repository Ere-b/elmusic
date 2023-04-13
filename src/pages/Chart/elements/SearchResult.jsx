import '../../../styles/ChartList.css';

const SearchResults = ({ result }) => {
  return (
    <table className="chart-table">
      <thead>
        <tr>
          <th className="cover-col">Cover</th>
          <th className="info-col">Information</th>
        </tr>
      </thead>
      <tbody>
        <tr className="album-list">
          <td className="album-cover">
            <button
              className="album-detail-btn"
              onClick={() => handleAlbumClick(result.id.attributes['im:id'])}
            >
              <img
                src={result['im:image'][1].label}
                alt={result['im:name'].label}
              />
            </button>
          </td>
          <td className="album-description">
            <p className="album-title">{result['im:name'].label}</p>
            <p className="artist-name">{result['im:artist'].label}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SearchResults;
