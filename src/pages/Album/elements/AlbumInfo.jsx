import Spinner from '../../../components/Spinner';
import Play from '../../../assets/play.webp';
import '../../../styles/Album.css';

const AlbumInfo = ({ album }) => {
  if (!album) {
    return <Spinner />;
  }

  return (
    <section className="album-info-wrapper">
      <article className="album-info-container">
        <div className="album-info-left">
          <img
            className="album-info-img"
            src={album['im:image'][2].label}
            alt={album['im:name'].label}
          />
        </div>
        <div className="album-info-middle">
          <h3 className="album-info-name">{album['im:name'].label}</h3>
          <div className="album-info-artist">{album['im:artist'].label}</div>
          <div className="album-info-release">
            Release Date: {album['im:releaseDate'].attributes.label}
          </div>
          <div className="album-info-genre">
            Genre: {album.category.attributes.term}
          </div>
          <div className="album-info-price">
            Price: {album['im:price'].label} USD
          </div>
        </div>
        <div className="album-info-right">
          <button className="album-info-play">
            <img src={Play} alt="play_icon" />
          </button>
        </div>
      </article>
    </section>
  );
};

export default AlbumInfo;
