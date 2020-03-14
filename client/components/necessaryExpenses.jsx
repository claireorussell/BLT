import React from 'react'
import { connect } from 'react-redux'

class necessaryExpenses extends React.Component{
    constructor(props){
        super(props)

        
    }

    // this.setState({
    //     balance: this.state.income - this.state.outcome
    //   });


    render(){
        console.log(this.props.user)
        return (
            <div>
                <h1>hello expenses you have {this.props.totalRemaining}</h1>
            </div>  
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user, 
        totalRemaining: state.totalRemaining,
    }
}

export default connect(mapStateToProps)(necessaryExpenses)