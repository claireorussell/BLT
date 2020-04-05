import React from 'react'
import { connect } from 'react-redux'

import { setExpenses } from '../actions'
import { updateRemaining } from '../actions'

class necessaryExpenses extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            necessaryExpenses: {
                rentOrMortgage: '',
                utilities: '',
                food: '',
                transport: '',
                donations: '',
            },
            balance: 0,
            totalRemaining: Number(this.props.totalRemaining),
        }
    }


    handleChange = (evt) => {
        this.setState({
            necessaryExpenses: {
                ...this.state.necessaryExpenses,
                [evt.target.name]: Number(evt.target.value)
            },
        })
    }

    handleClick = () => {
        this.setState({
            balance: this.state.necessaryExpenses.rentOrMortgage + this.state.necessaryExpenses.utilities + this.state.necessaryExpenses.food + this.state.necessaryExpenses.transport,
            totalRemaining: this.props.user.wage - this.state.balance
        })
    }


    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(setExpenses(this.state.necessaryExpenses))
        this.props.dispatch(updateRemaining(this.state.totalRemaining))
        this.props.history.push('/savings')
    }

    handleBack = (evt) => {
        evt.preventDefault()
        this.props.history.push('/')

    }

    render() {
        console.log(this.props.expenses)
        return (
            <div className='initialWrapper'>
                <h3>Essential weekly spending total remaining ${this.state.totalRemaining}</h3>
                {this.props.user.homeOwner == 'true' ? <h1 className='questionTitle'>Mortgage and rates</h1>
                    : <h1 className='questionTitle'>Rent payment</h1>}
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='rentOrMortgage'
                        value={this.state.necessaryExpenses.rentOrMortgage}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                <h1 className='questionTitle'>Utilities and internet</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='utilities'
                        value={this.state.necessaryExpenses.utilities}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                <h1 className='questionTitle'>Food and home essentials</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='food'
                        value={this.state.necessaryExpenses.food}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                <h1 className='questionTitle'>Transport</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='transport'
                        value={this.state.necessaryExpenses.transport}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>


                <div>
                    <img className="btnControl" onClick={this.handleBack} src="https://www.iconsdb.com/icons/preview/orange/arrow-97-xl.png" alt="back" />
                    <img className='btnControl' onClick={this.handleSubmit} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRahtMw7DMciTwaEEWVa2FvOuozWTt3-9fD7E7OqcHYswClHoOT" alt="" />
                </div> 

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        totalRemaining: state.totalRemaining,
        expenses: state.expenses,
    }
}

export default connect(mapStateToProps)(necessaryExpenses)