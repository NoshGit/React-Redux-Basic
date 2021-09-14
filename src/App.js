import './App.css';
import Counter from './Components/Counter';
import { useDispatch } from 'react-redux';
import { login, logout } from './Redux/actions';
import { useSelector } from 'react-redux';
import DisplayContainer from './Components/DisplayContainer';
import ButtonComponent from './Components/ButtonComponent';

function App() {
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.isLogged); 
  console.log('>>', isLogged);
  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        <div>Hello {isLogged? 'Noshir' : 'Guest'}!</div>
      </header>
      <ButtonComponent increase />
      <ButtonComponent />

      <div className="log-in-btn">
        {isLogged? <button onClick={()=> dispatch(logout())}>Log Out</button> : 
        <button onClick={()=> dispatch(login())}>Log In</button>}
      </div>

      <DisplayContainer count />
      <DisplayContainer />
    </div>
  );
}

export default App;
