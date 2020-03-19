import React from 'react'
import { connect } from 'react-redux'

import { setUser } from '../actions'
import { setTotalRemaining } from '../actions'

class initialQuestions extends React.Component {
    constructor(props) {
        super(props)


        this.state = {
            user: {
                wage: '',
                savingGoal: '',
                homeOwner: 'false',
                treatSpending1: '',
                treatSpending2: '',
            },
        }
    }

    handleChange = (evt) => {
        this.setState({
            user: {
                ...this.state.user,
                [evt.target.name]: evt.target.value
            }, 
        })
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        this.props.dispatch(setUser(this.state.user))
        this.props.dispatch(setTotalRemaining(this.state.user.wage))
        this.props.history.push("/expenses")
    }


    render() {
        return (
            <div className='initialWrapper'>

                <h1 className='questionTitle'>What's your weekly wage?</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='wage'
                        value={this.state.user.wage}
                        onChange={this.handleChange}
                    />
                </div>

                <h1 className='questionTitle'>What is your saving goal for the year?</h1>
                <div className='questionWrapper'>
                    $  <input
                        className="input"
                        type='text'
                        name='savingGoal'
                        value={this.state.user.savingGoal}
                        onChange={this.handleChange}
                    />
                </div>

                <h1 className='questionTitle'>Are you a home owner?</h1>
                <div className='questionWrapper'>
                {/* <button name='homeOwner' value={'true'} onClick={this.handleChange} className={`btn ${this.state.homeOwner ? 'btnActive' : ''}`}>yes</button> */}
                <button name='homeOwner' value={'true'} onClick={this.handleChange} className="btn" >yes</button>
                    <button name='homeOwner' value={'false'} onClick={this.handleChange}  className="btn">no</button>
                </div>

                <h1 className='questionTitle'>Pick two things you like to spend money on as a treat!</h1>
                <div className='questionWrapper'>
                    <div className='questionColumn1'>
                        <select id="option1" name="treatSpending1" onChange={this.handleChange}>
                            <option value="Eating">Food and drink</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Adventure">Adventure activies</option>
                            <option value="Materialistics">Materialistic stuff</option>
                            <option value="Hobbies">Hobbies</option>
                        </select>
                    </div>
                    <div className='questionColumn2'>
                        <select id="option2" name="treatSpending2" onChange={this.handleChange}>
                            <option value="Eating">Food and drink</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Adventure">Adventure activies</option>
                            <option value="Materialistics">Materialistic stuff</option>
                            <option value="Hobbies">Hobbies</option>
                        </select>
                    </div>
                </div>
                <div>
                <img className='btnControl'  onClick={this.handleSubmit} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRahtMw7DMciTwaEEWVa2FvOuozWTt3-9fD7E7OqcHYswClHoOT" alt=""/>
                </div>
            </div>
        )
    }




}

export default connect()(initialQuestions)
