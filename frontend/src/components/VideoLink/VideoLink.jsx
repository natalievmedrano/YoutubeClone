import React from "react";
import { Link } from "react-router-dom";

const VideoLink = ({video}) => {
  return (
    <div>
      <Link to={`/video/${video.id.videoId}`}>
        <img src={video.snippet.thumbnails.medium.url} alt="" />
        <h6>{video.snippet.title}</h6>
    
      </Link>
    </div>
  );
};

export default VideoLink;
