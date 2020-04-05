import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import InitialQuestions from './InitialQuestions'
import NecessaryExpenses from './NecessaryExpenses'
import Savings from './Savings'
import Totals from './Totals'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <div className='titleWrapper'>
            <img className='logo' src="https://images-na.ssl-images-amazon.com/images/I/41%2BK7DgSmkL._AC_SX355_.jpg" alt="" />
            <h1 className='mainTitle'> BLT </h1>
          </div>
          <Route exact path='/' component={InitialQuestions} />
          <Route path='/expenses' component={NecessaryExpenses} />
          <Route path='/savings' component={Savings} />
          <Route path='/totals' component={Totals} />
        </div>
      </Router>
    )
  }
}


export default App
