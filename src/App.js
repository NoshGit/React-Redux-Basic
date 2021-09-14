import './App.css';
import Counter from './Components/Counter';
import { useDispatch } from 'react-redux';
import { increament, decrement, login, logout } from './Redux/actions';
import { useSelector } from 'react-redux';

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
      <button onClick={()=> dispatch(increament(2))}>Increament</button>
      <button onClick={()=> dispatch(decrement())}>Decreament</button>

      <div className="log-in-btn">
        {isLogged? <button onClick={()=> dispatch(logout())}>Log Out</button> : 
        <button onClick={()=> dispatch(login())}>Log In</button>}
      </div>
    </div>
  );
}

export default App;
