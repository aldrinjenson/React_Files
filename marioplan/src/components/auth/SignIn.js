import React, { Component } from 'react'

class SignIn extends Component {
    state = {

    }

    handleChange = (e) => {
        console.log(e);
    }

    handleSubmit = (e) => {
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" onChange={this.handleChange} id="email"/>
                    </div>
                    
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" onChange={this.handleChange} id="password"/>
                    </div>
                    <div className="input-field">
                        <button className="button pink lighten-1 z-depth-0">Log In</button>
                    </div>
                </form>                
            </div>
        )
    }
}

export default SignIn
