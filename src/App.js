import React, { createContext, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Route,  Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home/Home';
import Details from './Components/Details/Details';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Admin from './Components/Admin/Admin';
import Item from './Components/Item/Item';
import Login from './Components/Login/Login';

export const UserContext = createContext();
function App() {
  const [loggedInUser , setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser ,setLoggedInUser]}>
      <Router>
      <Header></Header>
      <Switch>
          <Route path="/header">
            <Header/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <PrivateRoute path="/volunteer/:volunteer">
            <Details/>
          </PrivateRoute>
          <Route  path="/login">
            <Login/>
          </Route>
          <Route path ="/admin">
            <Admin/>
          </Route>
          <Route path="/item">
            <Item/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
