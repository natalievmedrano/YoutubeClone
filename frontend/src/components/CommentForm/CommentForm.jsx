import React, { useState } from "react";
import Comment from "../Comment/Comment";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const CommentForm = ({ getCommentsForVideo, videoId }) => {
const {config}= useAuth()
  const [text, setText] = useState("");

  const createComment = async (newComment) => {
    try {
        
        var response = await axios.post(
            `http://127.0.0.1:8000/api/comments/`,
            newComment, config
            );
            if (response.status === 201) {
                await getCommentsForVideo();
            }
        } catch (error) {
            console.error(response.data)
            
        }
  };

  function handleSubmit(event) {
    
    event.preventDefault();
    const newComment =   {
        video_id : videoId,
        text,
        likes:0,
        dislikes: 0,
    
    }
    createComment(newComment)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        COMMENT:
        <input
          type="comment"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">POST COMMENT</button>
      </div>
    </form>
  );
};

export default CommentForm;
