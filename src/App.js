import React,{ useState, useEffect }  from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './pages/Login';
import Dash from './pages/Dashboard';
import { logout} from './admin';
import './App.css';

function App() {

  const handleLogout = (e) => {
    logout();
    window.location.reload(false);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <button onClick={handleLogout} >logut</button>
          </div>
          <div className="content">
            <Switch>
            <PublicRoute restricted={true} component={Login} path="/" exact />
            <PrivateRoute component={Dash} path="/dashboard" exact />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
