import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import initialQuestions from './initialQuestions'
import necessaryExpenses from './necessaryExpenses'


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className='titleWrapper'>
            <img className='logo' src="https://images-na.ssl-images-amazon.com/images/I/41%2BK7DgSmkL._AC_SX355_.jpg" alt="" />
            <h1 className='mainTitle'> BLT </h1>
          </div>
          <Route exact path='/' component={initialQuestions} />
          <Route path='/expenses' component={necessaryExpenses} />
        </div>
      </Router>
    )
  }
}

export default App
