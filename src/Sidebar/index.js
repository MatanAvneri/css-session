import React from 'react'
import { Link } from 'react-router-dom'
import Locations from '../Locations'
import './style.css'

export default function Sidebar() {
    return (
        <ul className='sidebar'>
            {
                Locations.map((loc) => {
                    return (
                        <li key={loc.path}>
                            <Link to={loc.path}>{loc.text}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}