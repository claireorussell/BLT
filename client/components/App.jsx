import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import initialQuestions from './initialQuestions'


class App extends React.Component {
  render() {
    return(
  <Router>
  <div className='app'>
    <h1 className='mainTitle'> BLT </h1>
    <Route exact path='/' component={initialQuestions}/>
  </div>
  </Router>
    )}
}

export default App
