import React from 'react'
import { connect } from 'react-redux';
import { increament, decrement } from './../Redux/actions';

const ButtonComponent = (props) => {
    return (
        <React.Fragment>
            <button onClick={() => props.action(2)}>{props.increase? "Increament" : "Decreament"}</button>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const disPatchFunc = ownProps.increase? number => dispatch(increament(number)) : 
    number => dispatch(decrement(number));

    return {
        action: disPatchFunc
    }
}

export default connect(null, mapDispatchToProps)(ButtonComponent)
