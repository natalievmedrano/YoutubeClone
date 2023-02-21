import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = ({}) => {
  const [video, setVideo] = useState(null);

  const { videoId } = useParams();

  const fetchVideo = async () => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCj6vGRSUeWVDU1M19WLA2M6giN2hjWiVM`
    );
    setVideo(response.data.items[0]);
  };

  useEffect(() => {
    fetchVideo();
  }, []);



  return (
    <div>
      <VideoPlayer videoId={videoId} video={video}  />
    </div>
  );
};

export default VideoPage;
