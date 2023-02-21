import React, { useEffect, useState } from "react";
import CommentForm from "../CommentForm/CommentForm";
import axios from "axios";

const Comment = ({ comment }) => {
  return (
    <div>
      <h6>{comment.username}</h6>
      <p>{comment.text}</p>
    </div>
  );
};

export default Comment;
