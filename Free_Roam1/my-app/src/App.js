import React,{Component} from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'
import './App.css';

class App extends Component{
  state = {
    ninjas:[
      {name:"Ryu",age:34,belt:'black',id:1},
      {name:"Yoshi",age:17,belt:'green',id:2},
      {name:"Crystal",age:5,belt:'pink',id:3}
    ]
  }

  addAnother = (e) => {
    const NewNinjas = [...this.state.ninjas,e]
    this.setState({
      ninjas:NewNinjas
    })

  }

  render(){
    return(
      <div>
        <h1>Welcome</h1>
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja add={this.addAnother}/>
      </div>
    )
  }
}

export default App;
