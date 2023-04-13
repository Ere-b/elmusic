import { Link } from 'react-router-dom';
import '../../../styles/ChartList.css';

const ChartList = ({ albums, handleAlbumClick }) => {
  return (
    <table className="chart-table">
      <thead>
        <tr>
          <th className="cover-col">Cover</th>
          <th className="info-col">Information</th>
        </tr>
      </thead>
      <tbody>
        {albums.map((album) => (
          <tr className="album-list" key={album.id.attributes['im:id']}>
            <td className="album-cover">
              <button
                className="album-detail-btn"
                onClick={() => handleAlbumClick(album.id.attributes['im:id'])}
              >
                <img
                  src={album['im:image'][1].label}
                  alt={album['im:name'].label}
                />
              </button>
            </td>
            <td className="album-description">
              <p className="album-title">{album['im:name'].label}</p>
              <p className="artist-name">{album['im:artist'].label}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ChartList;
