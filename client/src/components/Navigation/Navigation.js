import React, { useContext, useEffect, } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import "./Navigation.css";
import { Link } from 'react-router-dom';
import {NotificationContext} from '../../contexts/NotificationContext';
import {AuthContext} from '../../contexts/AuthContext';


//navigation component holding information for user and notification.
function Navigation() {
    // const cookies = new Cookies()
    const {user,Logout,setUser} = useContext(AuthContext);
    const {notify,notifyMessagge} = useContext(NotificationContext);
    
   useEffect(()=>{
    const cookies = new Cookies()
       const token = cookies.get('AUTH_COOKIE')
       if(!token) {
           setUser(null);
       } else {
           axios.post('http://localhost:5000/user/verify',{

           },{withCredentials: true}).then(resp=>{
               setUser(resp.data.result.username);
           })
       }
      
   },[setUser])
    
    return (
        <>
        {user ? (<ul className="nav">
            
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link"  onClick={Logout} to="/">Logout</Link>
            </li>
            <li className="nav-item">

                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>) : (<ul className="nav">
            
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link"  to="/login">Login</Link>
            </li>
            <li className="nav-item">

                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>)}
         {notify ? (<div className="notification" style={{backgroundColor:notifyMessagge.nCollor}}>{notifyMessagge.nMessagge}</div>) : null}
        </>
       

    )
}

        

export default Navigation
