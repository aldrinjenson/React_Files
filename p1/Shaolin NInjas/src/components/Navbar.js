import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './Auth/SignedInLinks'
import SignedOutLinks from './Auth/SignedOutLinks'

const Navbar = () => {
    return (
        <div>
            <nav className='nav-wrapper light-blue lighten-2'>
                <div className="container">
                    <Link to='/' className='brand-logo red-text text-lighten-1'>Shaolin Ninjas</Link>
                    <SignedInLinks/>
                    <SignedOutLinks/>
                </div>
            </nav>
            
        </div>
    )
}

export default Navbar
