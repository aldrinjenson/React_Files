import React,{Component} from 'react';
import Persons from './Components/Persons'
import AddNew from './Components/AddNew'

class App extends Component {

  state = {
    persons:[
      {name:"Blob",age:34,favFood:'Chicken',id:1},
      {name:'Greg',age:43,favFood:'Rice',id:2},
      {name:"John",age:21,favFood:'Noodles',id:3}
    ]
  }

  addPerson = (e) =>{
    e.id = Math.random()
    const newList = [...this.state.persons,e]
    this.setState({
      persons:newList
    })
  }
  
  deletePerson = (id) => {
    const newPersonList = this.state.persons.filter(n=>{
      return n.id!==id
    })   

    this.setState({
      persons:newPersonList
    })

  }

  render(){
    return (
      <div className="App container">
        <h1>Hello wold</h1>
        <Persons names={this.state.persons} deletePerson={this.deletePerson}/>
        <AddNew addPerson={this.addPerson}/>
        
      </div>
    );
  }
}

export default App;
