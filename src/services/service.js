import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com';

// Top 100 앨범 데이터 가져오기
export const fetchTop100Albums = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/us/rss/topalbums/limit=100/json`
    );
    return response.data.feed.entry;
  } catch (error) {
    alert('Failed to load data');
  }
};

// 앨범 상세 데이터 가져오기
export const fetchAlbum = async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/us/rss/topalbums/limit=100/json`
    );
    const album = response.data.feed.entry.find(
      (entry) => entry.id.attributes['im:id'] === id
    );
    return album;
  } catch (error) {
    alert('Failed to load data');
  }
};
