import React ,{Component}from 'react';
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Post from './Components/Post'
import {BrowserRouter , Route, Switch} from 'react-router-dom'

class App extends Component{
  render(){
    return(

      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
            <Route path='/' component={Home}/>
            <Route path='/About' component={About}/>
            <Route path='/Contact' component={Contact}/>
            <Route path='/:path_id' component={Post}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;