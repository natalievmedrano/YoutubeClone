import React from "react";
import Comment from "../Comment/Comment";
import './VideoPlayer.css'

const VideoPlayer = ({ video, videoId,comments }) => {
  if (video) {
    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
        <h2>TITLE</h2>
        <h4>{video.snippet.title}</h4>
        <h2>DESCRIPTION</h2>
        <p id="description">{video.snippet.description}</p>
      </div>
    );
  }
  return null;
};

export default VideoPlayer;
