import React from 'react'
import { connect } from 'react-redux'


class Totals extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let user = this.props.user
        let expenses = this.props.expenses
        let savings = this.props.savings

        let homeCosts = expenses.rentOrMortgage + expenses.utilities + expenses.transport + expenses.food
        let treatSpending = savings.treat1 + savings.treat2
        return (
            <div className='initialWrapper'>
                <h2 className='questionTitle'>Weekly income</h2>
                    <p className='totals'>Wage: ${user.wage}</p>
            <p className='tips'>Separate your spending and saving with five accounts!</p>
                <h2 className='questionTitle'>Spending</h2>
                    <p className='totals'>Home and transport: ${homeCosts}</p>
                    <p className='totals'>Fun Money: ${treatSpending}</p>
                <h2 className='questionTitle'>Savings</h2>
                    <p className='totals'>Weekly savings: ${savings.savingGoal}</p>
                    <p className='totals'>Holidays: ${savings.backUp}</p>
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
