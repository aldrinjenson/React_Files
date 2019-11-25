import React,{Component} from 'react'

class AddNinja extends Component{
    state ={
        name:null,
        age:null,
        belt:null
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.add(this.state)        
    }

    render(){
        return(
            <div className="add-Ninja">
                <u><h3>Add Data about another Ninja:</h3></u>
                <center>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="age">Age:</label>
                        <input type="text" id="age" onChange={this.handleChange}/>
                        <br/>
                        <label htmlFor="belt">Belt:</label>
                        <input type="text" id="belt" onChange={this.handleChange}/>
                        <br/>
                        <button type="submit">Submit</button>
                    </form>
                </center>
            </div>
        )
    }
}

export default AddNinja