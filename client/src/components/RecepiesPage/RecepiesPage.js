import React,{useState,useEffect} from 'react'
import "./RecepiesPage.css";
import Recipe from "../Recipe/Recipe"
import Loader from '../Loader/Loader'
import * as recepiServices from '../../services/recepiServices/index'

const RecepiesPage = () => {
    const [recepies,setRecepies] = useState([]);
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        recepiServices.getAll().then((response)=>{
            setRecepies(response.data);
            setLoading(false)
        })
        
        
    },[])



    return (
        <div className= "container-xl">
            <h1 className="recepies-header">Our Recepies:</h1>
            {loading ? <Loader /> :
            <div className="row">
                
                
                {recepies.map(r=>{
                    return(
                    
                    <div key={r._id} className="col-md-4" style={{marginBottom:"2rem"}}>
                       <Recipe recipe={r} />
                    </div>
                    
                    
                   
                    )
                })}
            </div> }

            
        </div>
        
    )
}

export default RecepiesPage
