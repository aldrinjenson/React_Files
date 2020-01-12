import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class SignedOutLinks extends Component {
    render() {
        return (
            <ul className='right'>
                <li><Link to='#'>Settings</Link></li>
                <li><Link to='#'>Notifications</Link></li>
                <li><button className="btn-floating">AJ</button></li>
            </ul>
        )
    }
}

export default SignedOutLinks
