import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import Home from './components/HomePage/Home';
import Register from './components/RegisterPage/Register';
import Login from './components/LoginPage/Login';
import RecepiesPage from './components/RecepiesPage/RecepiesPage';
import About from './components/About/About';
import RepiceDetailsPage from './components/RecipeDetailsPage/RecipeDetailsPage';
import CreateRecepi from './components/CreateRecepi/CreateRecepi';
import Ranklist from './components/Ranklist/Ranklist'



function App() {
  return (
    <Router>
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/"  exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/recepies" exact >
          <RecepiesPage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/recepi/:id" exact component={RepiceDetailsPage}></Route>
        <Route path="/addrecepi" exact component={CreateRecepi}></Route>
        <Route path="/ranklist" exact component={Ranklist}></Route>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
