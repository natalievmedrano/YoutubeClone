import React from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
  const commentList = comments.map((comment) => <Comment comment={comment} />);
  return <div>{commentList}</div>;
};

export default CommentList;
