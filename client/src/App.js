import React from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage'
import Fib from './Fib'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/otherPage">Other Page</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/otherPage" component={OtherPage} />
        </div>
      </div>
    </Router>
  )
}

export default App
