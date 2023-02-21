import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "../CommentForm/CommentForm";
import CommentList from "../CommentList/CommentList";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

const VideoPage = ({}) => {
  const [video, setVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const { videoId } = useParams();

  const getCommentsForVideo = async () => {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/video/${videoId}/`
    );
    console.log("COMMENTS", response.data);
    setComments(response.data);
  };


  const fetchVideo = async () => {
    let response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyCj6vGRSUeWVDU1M19WLA2M6giN2hjWiVM`
    );
    setVideo(response.data.items[0]);
  };

  useEffect(() => {
    fetchVideo();
    getCommentsForVideo();
  }, []);

  return (
    <div>
      <VideoPlayer videoId={videoId} video={video} />
      <CommentForm getCommentsForVideo={getCommentsForVideo} videoId={videoId}/>
      <CommentList comments={comments}/>
    </div>
  );
};

export default VideoPage;
