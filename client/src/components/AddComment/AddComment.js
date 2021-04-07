import React,{useState,useContext} from 'react';
import "./AddComment.css";
import axios from 'axios'
import {NotificationContext} from '../../contexts/NotificationContext'

const AddComment = ({recepiInfo,setRecepiInfo,closeComment}) => {

    const {setNotifyMessagge,setNotify} =useContext(NotificationContext)
    const [comment,setComment] = useState('');

     useState(recepiInfo);

    const addNewComment = ()=>{
        const commentData = {
            comment: comment
        }

        axios.post(`http://localhost:5000/recepies/addcomment/${recepiInfo._id}`,commentData,{withCredentials: true})
        .then(resp=>{
            if(resp.data.messagge) {
                setNotify(true)
                setNotifyMessagge({nMessagge:resp.data.messagge,nCollor:'Red'})
                  setTimeout(() => {
                    setNotify(false)
                  }, 2000); 
                setComment(comment)
                
            } else {
                setNotify(true)
                setNotifyMessagge({nMessagge:resp.data.success,nCollor:'LightGreen'})
                setTimeout(() => {
                    setNotify(false)
                  }, 2000); 
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
