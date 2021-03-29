import React, { useEffect, useState } from 'react'
import "./Ranklist.css";
import * as recipeServices from '../../services/recepiServices/index';
import RecipeOfRanklist from '../RecipeOfRanklist/RecipeOfRanklist';


const Ranklist = () => {
    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        recipeServices.getRanklist().then(resp => {
            setRecipe(resp.data)
        })
    }, [])

    return (
        <div className="container-xl">
            <div className="container">
                <h2 className="top-recipes-header">Top 5 Recipes:</h2>
                {recipe.slice(0,5).map(r => {
                    return (

                        <div key={r._id} className="ranklistHolder">
                            <RecipeOfRanklist recipe={r} />
                        </div>
                    )

                })}
        </div>

            </div>
    )
}

export default Ranklist
