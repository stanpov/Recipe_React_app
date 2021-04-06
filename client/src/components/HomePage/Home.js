import React, { useContext } from 'react'
import "./Home.css"
import {Link} from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext'


const Home = () => {
    const {user} = useContext(AuthContext)
    
    return (
        <div className="container-fluid">
              
                 <div className="container-xl">
                 
                     <div className="home-container">
                        {user ? (<h1 className="user_grating">Hello    {user}</h1>) : (<h1 className="user_grating">Why not log in to have full access to our web site?</h1>)}

                        {user ? (<div className="btn-holder">
                        <Link className="btn-link" to="/recepies"><button className='user_btn'>All Recepies</button></Link>
                        <Link className="btn-link" to="/addrecepi"><button className='user_btn'>Create Recepi</button></Link>
                        <Link className="btn-link" to="/ranklist"><button className='user_btn'>Rank List</button></Link>
                        </div>) : (<div className="btn-holder">
                        <Link className="btn-link" to="/recepies"><button className='user_btn'>All Recepies</button></Link>
                        </div>)}
                        
                        
                    </div> 
                    
                    
                </div>
               

            
        </div>
    )
}

export default Home
