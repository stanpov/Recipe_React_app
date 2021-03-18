import React from 'react'
import "./Recipe.css"
import {Link} from 'react-router-dom'


const Recipe = ({recipe}) => {
    return (
        <div className="recipes__box">
            <img className="recipe__box-img" src={recipe.imageUrl} alt="repiceImg"/>
            <div className="recipe__text">
                <h5 className="recipes__title">
                {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}</h5>
           
                <p className="recipes__likes">Likes: {recipe.likes.length}</p>
                <p className="recipes__comments">Comments: {recipe.comments.length}</p>
            </div>
                <button key={recipe._id} className="recipes_buttons">
                <Link className="recepi__link" to={{pathname: `recepi/${recipe._id}`,state:recipe}}>View Recipe</Link>
                </button>
                <p className="recipes__subtitle">Created by: <span className="creator-text">{recipe.creator}</span></p>
         </div>
    )
}

export default Recipe
