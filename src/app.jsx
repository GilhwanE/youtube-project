import { useEffect, useState } from 'react';
import './app.css';
import ContentDetail from './components/contentDetail/contentDetail';
import ContentList from './components/contentList/contentList';
import SearchHeader from './components/searchHeader/header';

function App({ youtube }) {
  const [videos, setVideos] = useState([]); // useState videos는 상태 setVideos 상태 업데이트임
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = (video) => {
    setSelectedVideo(video); //setSelectedVideo 를 이용해서 state를 업데이트 해 줄 것
  };

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
      <section className="content">
        {selectedVideo && (
          <div className="content_detail">
            <ContentDetail video={selectedVideo} />
          </div> //selectedvideo가 있다면 contentDetail component를 이용해서 video를 전달할꺼야
        )}
        <div className="content_list">
          <ContentList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>
    </>
  );
}
export default App;
