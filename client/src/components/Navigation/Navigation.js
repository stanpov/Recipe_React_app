import React, { useContext } from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom';
import {NotificationContext} from '../../contexts/NotificationContext'
import {AuthContext} from '../../contexts/AuthContext'

function Navigation() {

    const {user,Logout} = useContext(AuthContext)
    const {notify,notifyMessagge} = useContext(NotificationContext)
    
    
   
    
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
