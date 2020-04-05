import React from 'react'
import { connect } from 'react-redux'


class Totals extends React.Component {
    constructor(props) {
        super(props)
    }




    // backUp: '',

    // holidays: '',


    // food: '',
    // transport: '',
    // donations: '',

    render() {
        let user = this.props.user
        let expenses = this.props.expenses
        let savings = this.props.savings

        let homeCosts = expenses.rentOrMortgage + expenses.utilities + expenses.transport + expenses.food
        let treatSpending = savings.treat1 + savings.treat2
        return (
            <div className='initialWrapper'>
                <h2>Weekly income</h2>
                <ul>
                    <p>Wage: {user.wage}</p>
                </ul>
            <p>Split your accounts into these 5 to keep track of your spending and saving!</p>
                <h2>Spending</h2>
                <ul>
                    <p>Home and transport: {homeCosts}</p>
                    <p>Fun Money: {treatSpending}</p>
                </ul>

                <h2>Savings</h2>
                <ul>
                    <p>Weekly savings: {savings.savingGoal}</p>
                    <p>Holidays: {savings.backUp}</p>
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        totalRemaining: state.totalRemaining,
        expenses: state.expenses,
        savings: state.savings
    }
}

export default connect(mapStateToProps)(Totals)
