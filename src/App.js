import './App.css';
import Counter from './Components/Counter';
import { useDispatch } from 'react-redux';
import { increament, decrement } from './actions';

function App() {
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <button onClick={()=> dispatch(increament(5))}>Increment</button>
      <button onClick={()=> dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
