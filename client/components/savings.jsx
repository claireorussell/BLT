import React from 'react'
import { connect } from 'react-redux'

import {setSavings} from '../actions'
import {updateRemaining} from '../actions'

class Savings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            balance: 0,
            totalRemaining: this.props.totalRemaining,
            savings: {
                savingGoal: Math.floor(this.props.user.savingGoal / 52),
                backUp: '',
                treat1: '',
                treat2: '',
            }
            // Array.reduce((savingGoal, backUp,...) => savingGoal + backUp + .....)
        }
    }

    handleChange = (evt) => {
        this.setState({
            savings: {
                ...this.state.savings,
                [evt.target.name]: Number(evt.target.value)
            },
        })
    }

    handleClick = (evt) => {
        this.setState({
            balance: this.state.savings.savingGoal + this.state.savings.backUp + this.state.savings.treat1 + this.state.savings.treat2,
            totalRemaining: Number(this.props.totalRemaining - this.state.balance)
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(setSavings(this.state.savings))
        this.props.dispatch(updateRemaining(this.state.totalRemaining))
        this.props.history.push('/totals')
    }

    handleBack = (evt) => {
        evt.preventDefault()
        this.props.history.push('/necessaryExpenses')

    }

    render() {
        console.log(this.props.user)
        return (
            <div className='initialWrapper'>
                <h3>Weekly Saving: total remaining ${this.state.totalRemaining}</h3>
                <h1 className='questionTitle'>Weekly saving goal</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='savingGoal'
                        value={this.state.savings.savingGoal}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                <h1 className='questionTitle'>Back-up & Holiday savings</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='backUp'
                        value={this.state.savings.backUp}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                <h1 className='questionTitle'>{this.props.user.treatSpending1} </h1>
                <div className='questionWrapper'>
                    $<input
                        className="input"
                        type='text'
                        name='treat1'
                        value={this.state.savings.treat1}
                        onChange={this.handleChange}
                        onClick={this.handleClick}
                        onFocus={this.handleClick}
                    />
                </div>
                
                    <h1 className='questionTitle'>{this.props.user.treatSpending2} </h1>
                    <div className='questionWrapper'>
                        $<input
                        className="input"
                        type='text'
                        name='treat2'
                        value={this.state.savings.treat2}
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

export default connect(mapStateToProps)(Savings)
