
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import Home from './components/HomePage/Home';
import Register from './components/RegisterPage/Register'

function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
