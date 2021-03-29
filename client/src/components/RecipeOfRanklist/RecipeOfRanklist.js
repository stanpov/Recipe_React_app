import React from 'react'
import "./RecipeOfRanklist.css"

const RecipeOfRanklist = ({recipe}) => {
    return (  

        <div className="recipeRankHolder">
                
                <img className="rankImage" src={recipe.imageUrl} alt="recipe_img" />
                <h2>{recipe.title}</h2>
            <div>
                <h5>Likes:  {recipe.likes.length}</h5>
                <h5>Comments:  {recipe.comments.length}</h5>

            </div>
       </div>
    )
}

export default RecipeOfRanklist
