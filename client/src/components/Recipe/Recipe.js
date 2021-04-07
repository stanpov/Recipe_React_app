import React,{useContext} from 'react'
import "./Recipe.css"
import {Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import * as recepiServices from '../../services/recepiServices/index'
import {AuthContext} from '../../contexts/AuthContext';
import {NotificationContext} from '../../contexts/NotificationContext'




const Recipe = ({recipe}) => {
    const {setNotifyMessagge,setNotify} = useContext(NotificationContext)
    const {user} = useContext(AuthContext)
    const History = useHistory()

    const deleteYourRecepi = (yourRecepiId)=>{
     recepiServices.deleteRecepi(yourRecepiId)
        .then((resp)=>{
            setNotify(true)
            setNotifyMessagge({nMessagge:resp.data.success,nCollor:'lightgreen'})
            setTimeout(() => {
                setNotify(false)
                
              }, 2000); 
              History.push('/')
        })
       
        
    }

    
  
    return (
        <div className="recipes__box">
            <img className="recipe__box-img" src={recipe.imageUrl} alt="repiceImg"/>
            <div className="recipe__text">
                <h5 className="recipes__title">
                {`${recipe.title}`} </h5>
           
                <p className="recipes__likes">Likes: {recipe.likes.length}</p>
                <p className="recipes__comments">Comments: {recipe.comments.length}</p>
            </div>
                <div className="recipess__buttons__holder">
                <button key={recipe._id} className="recipes_buttons" >
                    
                {user ? (<Link className="recepi__link" to={`recepi/${recipe._id}`}>View Recipe</Link>) :
                (<Link className="recepi__link" to={`/login`}>Log in for more...</Link>)}
                </button>
                {user === recipe.creator ? <button className="recipes_delete_btn" onClick={()=>deleteYourRecepi(`${recipe._id}`)}><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg></button> : null }
                
                </div>
                    
                <p className="recipes__subtitle">Created by: <span className="creator-text">{recipe.creator}</span></p>
         </div>
    )
}

export default Recipe
