import React,{useState} from 'react';
import "./AddComment.css";
import axios from 'axios'

const AddComment = ({recepiInfo,setRecepiInfo,closeComment}) => {

    
    const [comment,setComment] = useState('');
     useState(recepiInfo);
    
    

    const addNewComment = ()=>{
        const commentData = {
            comment: comment
        }

        axios.post(`http://localhost:5000/recepies/addcomment/${recepiInfo._id}`,commentData)
        .then(resp=>{
            if(resp.status === 304) {
                // to show error message if comment empty.
                setComment(comment)
                
            } else {
                
                setRecepiInfo(resp.data.result)
                

                

               closeComment()
               
               
            }
        })
    }



    return (
        <div className="add-comment-div">
            <form className="add-comment-form">
                <label className="add-comment-label" htmlFor="comment"><p className="add-form-paragraph">Comment:</p></label>
                <textarea  type="field" className="add-comment-textarea" id="comment" name="comment" value={comment} onChange={(e)=>setComment(e.target.value)} />
            </form>
            <button onClick={addNewComment} className="add-comment-btn">Add</button>
            <button onClick={closeComment} className="cancel-comment-btn">Cancel</button>
        </div>
    )
}

export default AddComment
