import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <a href="df" className="brand-logo">Poke'Times</a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/About">About</NavLink></li>
                    <li><NavLink to="/Contact">Contacts</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar