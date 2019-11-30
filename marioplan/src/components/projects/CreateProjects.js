import React, { Component } from 'react'

class CreateProjects extends Component {
    state = {
        title:"",
        content:""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state);
        
    }

    render() {
        return (
            <div className="container">
                <h5>Create New Project</h5>  
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Enter Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Enter Content</label>
                        <input type="text" id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <button className="btn pink lighten-2 ">Create Project</button>
                    
                </form>              
                
                
            </div>
        )
    }
}

export default CreateProjects

