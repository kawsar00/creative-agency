import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home';


export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route>
          <Route path="/">

          </Route> */}
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
