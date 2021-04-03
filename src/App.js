import React,{ useState, useEffect }  from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Login from './pages/Login';
import Dash from './pages/Dashboard';
import { logout,isLogin } from './admin';
import { useHistory } from "react-router-dom";
import './App.css';

function App() {

  let history = useHistory();

  const handleLogout = (e) => {
    logout();
    window.location.reload(false);
  }
  const handleisLoged = ()=>{
    console.log(isLogin())
    
  }
  useEffect(() => {
    handleisLoged()
  }, [])
  

  return (
    <div className="App">
      <h1>Bocasay webview</h1>
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
