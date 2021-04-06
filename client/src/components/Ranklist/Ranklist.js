import React, { useEffect, useState } from 'react';
import "./Ranklist.css";
import Loader from '../Loader/Loader'
import * as recipeServices from '../../services/recepiServices/index';



const Ranklist = () => {
    const [recipe, setRecipe] = useState([]);
    const [index,setIndex] = useState(0);
    const [loading,setLoading] = useState(true);

    
    

    useEffect(() => {
        recipeServices.getRanklist().then(resp => {
            setRecipe(resp.data[index])
            setLoading(false)
        })
    },[index])

    const nextRecipe = ()=>{
        setIndex(prevstate=>prevstate + 1)
        
    }

    const prevRecipe = ()=>{
        setIndex(prevstate=>prevstate - 1)
    }

    return (
        <div className="container-xl">
            <div className="container">
                <h2 className="top-recipes-header">Top 5 Recipes:</h2>
                {loading ? <Loader/> :
                    <div className="carousel">
                        <div
                        className="carouselInner"
                        style={{ backgroundImage: `url(${recipe.imageUrl})`,opacity:0.9 }}>
                            <div className="left">
                                {index > 0 ?
                                <button className="carouselLeftBtn" onClick={prevRecipe}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                </svg>
                                </button> : null}

                            </div>
                            <div className="center">
                                <h1 className="carouselTitle">{recipe.title}</h1>
                                <span className="carouselLikes">Likes: {recipe.likes ? recipe.likes.length : 0}</span>
                                <span className ="carouselComments">Comments: {recipe.comments ? recipe.comments.length : 0}</span>
                            </div>
                            <div className="right">
                                {index <= 4 ?
                                <button className="carouselRightBtn" onClick={nextRecipe}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                </svg> 
                                </button> : null}
                            </div>
                        </div>
                    </div>}
             </div>

         </div>
    )
}

export default Ranklist
