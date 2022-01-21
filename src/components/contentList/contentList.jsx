import React from 'react';
import Contnent from '../contentMain/contnent';
import styles from './contentList.module.css';

const ContentList = (
  { videos, onVideoClick, display } // videos가 props로 전달 그리고 전달받은 props가 사용되는거지 ?
) => (
  // deconstructing을 이용하여
  <ul className={styles.contanier}>
    {videos.map((video) => (
      <Contnent
        key={video.id}
        video={video}
        onVideoClick={onVideoClick}
        display={display}
      />
    ))}
  </ul>
);
// props안에있는 videos를 빙글빙글 돌면서 각각의 video를 전달하여 배열형태로 뿌려주는 역할
export default ContentList;
