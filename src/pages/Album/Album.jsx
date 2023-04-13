import { useState, useEffect, lazy, Suspense } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAlbum } from '../../services/service';
import Spinner from '../../components/Spinner';

const AlbumInfo = lazy(() => import('./elements/AlbumInfo'));

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    const getAlbum = async () => {
      const albumData = await fetchAlbum(id);
      setAlbum(albumData);
    };
    getAlbum();
  }, [id]);

  return (
    <Suspense fallback={<Spinner />}>
      <AlbumInfo album={album} />
    </Suspense>
  );
};

export default Album;
