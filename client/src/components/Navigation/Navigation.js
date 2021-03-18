import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <ul className="nav">

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
        </ul>
    )
}

export default Navigation
