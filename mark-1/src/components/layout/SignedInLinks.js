import React from 'react'
import {Link} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <div>
            <ul className="right">
                <li><Link to='/create'>New Project</Link></li>
                <li><Link to='/'>Log Out</Link></li>
                <li><Link to='/' className="btn btn-floating lighten-1 pink">AJ</Link></li>
            </ul>
        </div>
    )
}

export default SignedInLinks
