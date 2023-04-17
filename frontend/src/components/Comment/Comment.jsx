import React, { useEffect, useState } from "react";
import './Comment.css'
import axios from "axios";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <h6>{comment.username}</h6>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
