import React, { useEffect, useState } from 'react';
import CommentForm from '../CommentForm/CommentForm';
import axios from 'axios';

const Comment = ({}) => {
    const[comments,setComments]= useState('');

    const getCommentsForVideo = async() => {
        let response= await axios.get(`http://127.0.0.1:8000/api/comments/video/aaa/`);
        console.log('COMMENTS', response.data)
        setComments(response.data);
    
      };
      useEffect(()=>{
        getCommentsForVideo();
      },[]);
    return ( 
        <div>
            <CommentForm comments={comments}/> comment goes here
        </div>
     );
}
 
export default Comment;