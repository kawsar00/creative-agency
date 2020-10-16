import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { createContext } from 'react';
import { useState } from 'react';
import NoMatch from './Components/NoMatch/NoMatch';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Dashboard/Order/Order';
import Review from './Components/Dashboard/Review/Review';
import Services from './Components/Dashboard/Services/Services';
import ServiceList from './Components/AdminDashboard/ServiceList/ServiceList';
import AddService from './Components/AdminDashboard/AddService/AddService';
import MakeAdmin from './Components/AdminDashboard/MakeAdmin/MakeAdmin';


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
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/serviceData">
            <Services></Services>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/serviceList">
              <ServiceList></ServiceList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
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
