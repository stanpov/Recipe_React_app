import React,{useState,useEffect} from 'react'

import "./RecepiesPage.css";
import axios from 'axios';
import Recipe from "../Recipe/Recipe"

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
                    
                    <div key={r._id} className="col-md-4" style={{marginBottom:"2rem"}}>
                       <Recipe recipe={r} />
                    </div>
                    
                    
                   
                    )
                })}
            </div>

            
        </div>
        
    )
}

export default RecepiesPage
