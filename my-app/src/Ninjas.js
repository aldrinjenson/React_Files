import React, {Component} from 'react'
// import { className } from 'postcss-selector-parser'

class Ninjas extends Component{
    render(){
        // console.log(this.props)
        // console.log(this)
        const{name,age,belt} = this.props; //destructuring
        
        return(
            <div className="ninja">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Belt: {belt}</div>
            </div>
        )
    }
}

export default Ninjas;