import React from 'react';
import styles from './content.module.css';

// 1. thubmnail를 클릭하면 해당 비디오 url로 연결되어야한다.
// 2. 비디오 url은 video의 key값으로 연결된다.
// 3. url 경로는 https://www.youtube.com/watch?v=${key} 이런식으로 된다.

const Contnent = ({ video, video: { snippet }, onVideoClick, display }) => {
  const displayType = display === 'list' ? styles.list : styles.grid;
  return (
    <li
      className={`${styles.video} ${displayType}`}
      onClick={() => onVideoClick(video)}
    >
      <img
        className={styles.thumbnails}
        src={snippet.thumbnails.medium.url}
        alt="video thumbnail"
      />

      <div className={styles.video_text}>
        <p className={styles.video_title}>{snippet.title}</p>
        <p className={styles.video_subtitle}>{snippet.channelTitle}</p>
      </div>
    </li>
  );
};

// 각각의 비디오의 타이틀을 호출하는 부분
export default Contnent;
