import React, {Component} from 'react'
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component{

  state = {
    ninjas:[
      {name:"Ryu",age:34,belt:'black',id:1},
      {name:"Yoshi",age:17,belt:'green',id:2},
      {name:"Crystal",age:5,belt:'pink',id:3}
    ]
  }

  addNinja = (ninj) => {
    // console.log(ninj)
    ninj.id = Math.random()

    let newNinjaArray = [...this.state.ninjas,ninj] //Copying using Spread operator
    this.setState({
      ninjas: newNinjaArray
    })
  }

  deleteNinja = (id) => {
    console.log(id);
    let newNinjas = this.state.ninjas.filter((n) => {
      return n.id !== id
    })    
    //filter method filters the data only if the condition satifies

    this.setState({
      ninjas:newNinjas
    })

  }

  componentDidMount(){
    console.log("Component Mounted"); 
  }

  componentDidUpdate(prevProp,prevState){
    console.log("Component Updated");
    console.log(prevProp,prevState)    
  }

  render(){
    return(
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome XD </p>   
        <Ninjas ninjas={this.state.ninjas} deleteWho={this.deleteNinja}/>
        <AddNinja addAnother={this.addNinja} />                
      </div>
    );
  }
}

export default App;
