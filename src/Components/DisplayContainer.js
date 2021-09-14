import React from 'react'
import { connect } from 'react-redux'

const DisplayContainer = (props) => {
    return (
        <div>
            <h2>State Item - {props.item}</h2>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const displayTxt =  state.isLogged? "Logged In" : "Not Logged In"
    const itemState = ownProps.count ? state.counter : displayTxt;
    return{
        item: itemState
    }
}

export default connect(mapStateToProps)(DisplayContainer)
