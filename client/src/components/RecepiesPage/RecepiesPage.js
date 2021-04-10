import React,{useState,useEffect} from 'react'
import "./RecepiesPage.css";
import Recipe from "../Recipe/Recipe"
import Loader from '../Loader/Loader'
import * as recepiServices from '../../services/recepiServices/index'


//this component is showing all recepis that we have.
const RecepiesPage = () => {
    const [recepies,setRecepies] = useState([]);
    const [loading,setLoading] = useState(true)


    //making get request to database and set useeffect to be empty array not to render all the time just one time
    //when is rendered we set loading to be false and hide loading bar.
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
                
                {/* we go throw all recepies and map each of them in Recepi component */}
                {recepies.map(r=>{
                    return(
                    
                    // Recepi component receive parameter recipe which is all information for the recepi
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
