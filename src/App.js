import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux';
import HomeComponent from './Components/HomeComponent';
import UserContainer from './Components/UserContainer';

const App = () => {
  const isLogged = useSelector(state => state.isLogged); 
  return (
    <Router>
      <div className="App">  
        <div className="App-header">
          <h4>React Redux Basic</h4>

          <ul className='nav-links'>
            <li>
              <NavLink className="links" activeClassName="active-link" to="/" exact>Home</NavLink>       
            </li>
            <li>
              <NavLink className="links" activeClassName="active-link" to="/users">Users</NavLink>
            </li>
          </ul>

          <div className='greet-section'>Hello {isLogged? 'Noshir' : 'Guest'}!</div>
        </div>    
        <Switch>
          <Route path="/" exact component={HomeComponent} />
          <Route path="/users" component={UserContainer} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
