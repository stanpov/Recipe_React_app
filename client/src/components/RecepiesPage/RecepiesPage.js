import React,{useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import "./RecepiesPage.css";
import axios from 'axios'

const RecepiesPage = () => {
    const [recepies,setRecepies] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000/recepies/all").then((response)=>{
            setRecepies(response.data)
        })
    },[])



    return (
        <div className= "container-xl">
            <h1 className="recepies-header">Our Recepies:</h1>
            <div className="row">
                
                
                {recepies.map(r=>{
                    return(
                    <>
                    <div className="col-md-4" style={{marginBottom:"2rem"}}>
                        <div className="recipes__box">
                            <img className="recipe__box-img" src={r.imageUrl} alt="repiceImg"/>
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {r.title.length < 20 ? `${r.title}` : `${r.title.substring(0,25)}...`}</h5>
                               
                                <p className="recipes__likes">Likes: {r.likes.length}</p>
                                <p className="recipes__comments">Comments: {r.comments.length}</p>
                            </div>
                                    <button key={r._id} className="recipes_buttons">
                                      <Link className="recepi__link" to={{pathname: `recepi/${r._id}`}}>View Recipe</Link>
                                      </button>
                                    <p className="recipes__subtitle">Created by: <span className="creator-text">{r.creator}</span></p>
                        </div>
                    </div>
                    
                    </>
                   
                    )
                })}
            </div>

            
        </div>
        
    )
}

export default RecepiesPage
