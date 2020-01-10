import React, { Component } from 'react'

class AddNinja extends Component {

    state = {
        name:'',
        age:null,
        belt:''
    }

    handleClick = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state);
        this.props.addNew(this.state)
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" id='name' onChange={this.handleClick}/>

                    <label htmlFor="age">Enter Age</label>
                    <input type="text" id='age' onChange={this.handleClick}/>

                    <label htmlFor="belt">Enter Belt</label>
                    <input type="text" id='belt' onChange={this.handleClick}/>

                    <button className="btn">Submit</button>
                </form>
                
            </div>
        )
    }
}

export default AddNinja
