import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import {Switch,BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navbar/>
          <Switch>
            <Dashboard/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
