import React from 'react';
import Contnent from '../contentMain/contnent';

const ContentList = (props) => (
  <ul>
    {props.videos.map((video) => (
      <Contnent key={video.id} video={video} />
    ))}
  </ul>
);

export default ContentList;
