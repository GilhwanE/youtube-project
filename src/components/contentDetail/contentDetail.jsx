import React from 'react';
import styles from './contentDetail.module.css';

const ContentDetail = ({ video, video: { snippet } }) => (
  //선택된 비디오를 가져오겠지

  <section className={styles.detail}>
    <iframe
      className={styles.video}
      type="text/html"
      width="100%"
      height="500px"
      src={`https://www.youtube.com/embed/${video.id}`}
      frameBorder="0"
      allowFullScreen
    ></iframe>
    <h2>{snippet.title}</h2>
    <h3>{snippet.channleTitle}</h3>
    <pre className={styles.desc}>{snippet.description}</pre>
  </section>
);

export default ContentDetail;
