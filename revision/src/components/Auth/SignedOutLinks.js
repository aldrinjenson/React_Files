import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SignedOutLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li><Link to='#'>Sign Up</Link></li>
                <li><Link to='#'>Log In</Link></li>
            </ul>
        )
    }
}

export default SignedOutLinks
