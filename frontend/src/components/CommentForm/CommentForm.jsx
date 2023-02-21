import React from 'react';


const CommentForm = ({comment}) => {
    return ( 
        <div>
            <li>
                USER:
                COMMENT: <input type="comment" />{comment} <button>POST COMMENT</button>
            </li>
        </div>
     );
}
 
export default CommentForm;