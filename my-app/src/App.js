import React, {Component} from 'react'
import Ninjas from './Ninjas'

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome XD </p>        
        <Ninjas name="Ryu" age="25" belt="Black"/>
        <hr/>
        <Ninjas name="Yoshi" age="34" belt="Red"/>
        <hr/>
        <Ninjas name="Mario" age="5" belt="Brown"/>
      </div>
    );
  }
}

export default App;
