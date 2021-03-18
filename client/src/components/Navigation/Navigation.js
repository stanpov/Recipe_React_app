import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <ul class="nav">

            <li class="nav-item">
                <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
            </li>
            <li class="nav-item">

                <Link class="nav-link" to="/about">About</Link>
            </li>
        </ul>
    )
}

export default Navigation
