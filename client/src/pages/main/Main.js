import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Transaction from "../../components/transactions/Transaction";
import User from "../../components/user/User";
import Land from "../../components/land/Land";

import Navbar from "../../components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./main.css";
import SignIn from "../../components/signin/SignIn";
function Main() {
  return (
    <div className="main-board">
      <Router>
        <div className="main-nav">
          <Navbar />
        </div>
        <div className="main-dash">
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/transaction">
              <Transaction />
            </Route>
            <Route path="/user">
              <User />
            </Route>
            <Route path="/land">
              <Land />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Main;
