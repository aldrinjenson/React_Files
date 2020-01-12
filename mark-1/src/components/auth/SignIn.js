import React, { Component } from 'react'

class SignIn extends Component {
    state = {
        email:[],
        password:[]
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
    }



    render() {
        return (
            <div className='container'>
                <h5>Sign In</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="email">E-Mail</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>       

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>            

                    <button className='btn pink lighten-1 z-depth-0'> Log In</button>
                </form> 
                    
            </div>
        )
    }
}

export default SignIn
