import React from 'react'
import "./Navigation.css"
import {Link} from 'react-router-dom'

function Navigation() {
    return (
        <div className="navigation_div">
            <nav>
                <ul className="navigation_ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
