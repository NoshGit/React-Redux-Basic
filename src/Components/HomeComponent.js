import React from 'react'
import Counter from './Counter'
import { useDispatch } from 'react-redux';
import { login, logout } from './../Redux/actions';
import { useSelector } from 'react-redux';
import DisplayContainer from './DisplayContainer';
import ButtonComponent from './ButtonComponent';

const HomeComponent = () => {
    const dispatch = useDispatch();
    const isLogged = useSelector(state => state.isLogged); 

    console.log("is Logged In", isLogged);
    return (
        <>
        <div className="home-header">
            <Counter />
            
        </div>
        <ButtonComponent increase />
        <ButtonComponent />

        <div className="log-in-btn">
            {isLogged? <button onClick={()=> dispatch(logout())}>Log Out</button> : 
            <button onClick={()=> dispatch(login())}>Log In</button>}
        </div>
        
        <DisplayContainer count />
        <DisplayContainer />
        </>
    )
}

export default HomeComponent
