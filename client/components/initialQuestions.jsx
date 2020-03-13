import React from 'react'
import { connect } from 'react-redux'

class initialQuestions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='initialWrapper'>

                <h1 className='questionTitle'>What's your weekly wage?</h1>
                <div className='questionWrapper'>
                    $  <input
                        class="input"
                    // type='text'
                    // name='name'
                    // value={this.state.savingGoal}
                    // onChange={this.handleChange}
                    />
                </div>


                <h1 className='questionTitle'>What is your saving goal for the year?</h1>
                <div className='questionWrapper'>
                    $  <input
                        class="input"
                    // type='text'
                    // name='name'
                    // value={this.state.savingGoal}
                    // onChange={this.handleChange}
                    />
                </div>

                <h1 className='questionTitle'>Are you a home owner?</h1>
                <div className='questionWrapper'>
                    <button className="btn">yes</button>
                    <button className="btn">no</button>
                </div>

                <h1 className='questionTitle'>Pick two things you like to spend money on as a treat!</h1>
                <div className='questionWrapper'>
                    <div className='questionColumn1'>
                        {/* change to input drop down */}
                        <select id="option1" name="treat1">
                            <option value="eating">Food and drink</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="adventure">Adventure activies</option>
                            <option value="materialistics">Materialistic stuff</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                    </div>
                    <div className='questionColumn2'>
                        <select id="option2" name="treat2">
                            <option value="eating">Food and drink</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="adventure">Adventure activies</option>
                            <option value="materialistics">Materialistic stuff</option>
                            <option value="vehicles">Vehicles</option>
                        </select>
                    </div>
                </div>
                <button className='btn btnNext'>next</button>
            </div>
        )
    }




}

export default connect()(initialQuestions)
