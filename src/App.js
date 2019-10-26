import React from 'react';
import './App.css';
import Register from './Account/Register/RegisterSection';
import LoginSection from './Account/Login/LoginSection';
import Dashboard from './Dashboard/DashboardSection';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <LoginSection />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
