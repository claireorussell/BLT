import React from 'react'
import { connect } from 'react-redux'

class initialQuestions extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='initialWrapper'>
                <h1 className='questionTitle'>What will guide your savings goals?</h1>
                <div className='questionsWrapper'>
                    <div className='questionColumn1'>
                        <button class="btn">save by $ amount</button>
                    </div>
                    <div className='questionColumn2'>
                        <button class="btn">save by salary %</button>
                    </div>
                </div>
                <h1 className='questionTitle'>Pick two things you like to spend money on as a treat!</h1>
                <div className='questionsWrapper'>
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
            </div>
        )
    }




}

export default connect()(initialQuestions)
