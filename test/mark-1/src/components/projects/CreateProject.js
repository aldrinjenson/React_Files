import React, { Component } from 'react'

class CreateProject extends Component {
    state = {
        title:'',
        content:''
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
                <h5>Create new Project</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>       

                    <div className="input-field">
                        <label htmlFor="Content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>            

                    <button className='btn pink lighten-1 z-depth-0'> Create Project</button>
                </form> 
                    
            </div>
        )
    }
}

export default CreateProject
