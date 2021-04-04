import React, { useContext } from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'
import {AuthContext} from '../../contexts/AuthContext'

function Navigation() {
    const {user} = useContext(AuthContext)
    
    return (
        <>
        {user ? (<ul className="nav">
            
            <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
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
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">

                <Link className="nav-link" to="/about">About</Link>
            </li>
        </ul>)}
        </>
       

    )
}

        

export default Navigation
