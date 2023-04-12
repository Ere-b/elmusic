import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com';

// Top 100 앨범 데이터 가져오기
export const fetchTopAlbums = async () => {
  const response = await axios.get(
    `${BASE_URL}/us/rss/topalbums/limit=100/json`
  );
  return response.data.feed.entry;
};
