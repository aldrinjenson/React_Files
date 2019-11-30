import React,{Component} from 'react'

class AddNew extends Component{
    state = {
        name:null,
        age:null,
        favFood:null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addPerson(this.state)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3>Add: New Person</h3>
                    <span>Enter name:</span>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    <span>Enter Age:</span>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    <span>Enter Favourite Food:</span>
                    <input type="text" id="favFood" onChange={this.handleChange}/>
                    <button className='btn' type="submit">Add Person</button>
                </form>
            </div>
        )
    }
}

export default AddNew