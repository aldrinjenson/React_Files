import React, {Component} from 'react';
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home}/>
          <Route path='/About' component={About}/>
          <Route path='/Contact' component={Contact}/>
        </div>
    </BrowserRouter>
    )
  }
}

export default App;
