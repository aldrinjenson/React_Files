import React,{Component} from 'react';
import Todos from './Todos'
import AddTodo from './AddTodo'

class App extends Component{

  state = {
    todos:[
      {id:1,content:'buy some milk'},
      {id:2,content:'play mario kart'},      
    ]
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((td) => {
      return td.id !== id
    })

    this.setState({
      todos:newTodos
    })    
  }

  addNewTodo = (todo) => {
    todo.id = Math.random()
    let NewTodoArray = [...this.state.todos,todo]
    this.setState({
      todos:NewTodoArray
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">TOdo's</h1>
        <h6 className="light">You have {this.state.todos.length} todos left to do</h6>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addNewTodo={this.addNewTodo}/>
      </div>
    )
  }
}

export default App;
