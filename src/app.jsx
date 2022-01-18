import { useEffect, useState } from 'react';
import './app.css';
import ContentList from './components/contentList/contentList';
import SearchHeader from './components/searchHeader/header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // useState videos는 상태 setVideos 상태 업데이트임
  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
    //useEffect 상태가 변화될때 호출하기 위한것
  }, []); // 한번만 호출
  return (
    // onSerach가 되면 내 serach를 찾아라
    <>
      <SearchHeader onSearch={search} />
      <ContentList videos={videos} />
    </>
  );
}
export default App;
