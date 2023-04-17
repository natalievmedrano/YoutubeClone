import React from "react";
import './VideoPlayer.css'
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const VideoPlayer = ({ video, videoId}) => {
  if (video) {
    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${videoId}`} width="50%" height="360"></iframe>
        <h4>{video.snippet.title}</h4>
        <p id="description">{video.snippet.description}</p>
      </div>
      
    );
  }
  return null;
};

export default VideoPlayer;
