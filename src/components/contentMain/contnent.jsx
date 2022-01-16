import React from 'react';
import styles from './content.module.css';

const Contnent = (props) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnails}
      src={props.video.snippet.thumbnails.medium.url}
      alt="video thumbnail"
    />
    <div className={styles.video_text}>
      <p className={styles.video_title}>{props.video.snippet.title}</p>
      <p className={styles.video_subtitle}>
        {props.video.snippet.channelTitle}
      </p>
    </div>
  </li>
);

// 각각의 비디오의 타이틀을 호출하는 부분
export default Contnent;
