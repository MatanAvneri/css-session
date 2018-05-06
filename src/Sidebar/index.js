import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'

export default function Sidebar() {
    return (
        <ul className='sidebar'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/position">Position</Link>
            </li>
            <li>
                <Link to="/specificity">Specificity</Link>
            </li>
            <li>
                <Link to="/display">Display</Link>
            </li>
        </ul>
    )
}