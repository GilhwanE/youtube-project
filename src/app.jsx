import { useEffect, useState } from 'react';
import './app.css';
import ContentList from './components/contentList/contentList';
import Content from './components/contentMain/contnent';
import Header from './components/header';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET', // 옵션 전달하는 부분
      redirect: 'follow',
    };

    fetch(
      'https://youtube.googleapis.com/youtube/v3\n\n/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBRUI85ZbQEEJk7PKA7VXzaQQBGtIgfx1s',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items)) // result에 있는 items를 받아올것
      .catch((error) => console.log('error', error));
  }, []); // 한번만 호출
  return (
    <>
      <Header />
      <ContentList videos={videos} />
    </>
  );
}
export default App;
