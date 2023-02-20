import React from "react";

const VideoPlayer = ({ video, videoId }) => {
  if (video) {
    return (
      <div>
        <iframe src={`https://www.youtube.com/embed/${videoId}`}></iframe>
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    );
  }
  return null;
};

export default VideoPlayer;
