import React from 'react'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../Home'
import Position from '../Position'
import Specificity from '../Specificity';
import Display from '../Display';
import './style.css'

export default function Sidebar() {
    return (
        <Router>
            <div className='app'>
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

                <div className='content'>
                    <Route exact path="/" component={Home} />
                    <Route path="/position" component={Position} />
                    <Route path="/specificity" component={Specificity} />
                    <Route path="/display" component={Display} />
                </div>
            </div>
        </Router>
    )
}