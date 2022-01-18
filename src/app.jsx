import { useEffect, useState } from 'react';
import './app.css';
import ContentList from './components/contentList/contentList';
import SearchHeader from './components/searchHeader/header';

function App() {
  const [videos, setVideos] = useState([]); // useState videos는 상태 setVideos 상태 업데이트임
  const search = (query) => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyBRUI85ZbQEEJk7PKA7VXzaQQBGtIgfx1s`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((item) => ({ ...item, id: item.id.videoId }))
      ) // id에 비디오 아이디로 덮어준다
      // id를 변환해줘야한다 result.itmes에서 가져온 결ㅇ과를
      .then((items) => setVideos(items)) // result에 있는 items를 받아올것   setViedos 업데이트된 부분에 결과값을 받아올것
      .catch((error) => console.log('error', error));
  };

  useEffect(() => {
    //useEffect 상태가 변화될때 호출하기 위한것
    const requestOptions = {
      method: 'GET', // 옵션 전달하는 부분
      redirect: 'follow',
    };
    fetch(
      'https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRUI85ZbQEEJk7PKA7VXzaQQBGtIgfx1s',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) // result에 있는 items를 받아올것   setViedos 업데이트된 부분에 결과값을 받아올것
      .catch((error) => console.log('error', error));
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
