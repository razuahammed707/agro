import React from "react";
import Dashboard from "../../components/dashboard/Dashboard";
import Transaction from "../../components/transactions/Transaction";
import User from "../../components/user/User";
import Land from "../../components/land/Land";

import Navbar from "../../components/navigation/Navbar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import "./main.css";
import SignIn from "../../components/signin/SignIn";
function Main() {

  if(localStorage.getItem("agro_auth")==="true"){
    return (
      <div className="main-board">
          <div className="main-nav">
            <Navbar />
          </div>
          <div className="main-dash">
              <Route path="/admin/dashboard">
                <Dashboard />
              </Route>
              
              <Route path="/admin/transaction">
                <Transaction />
              </Route>
              <Route path="/admin/user">
                <User />
              </Route>
              <Route path="/admin/land">
                <Land />
              </Route>
          </div>
      </div>
    );
  }else{
    return(<Redirect to="/login"/>)
  }
  
}

export default Main;
