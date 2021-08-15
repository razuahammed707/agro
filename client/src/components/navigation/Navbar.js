import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { MdDashboard, MdPayment } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { GiIsland } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-bar">
          <ul className="nav-menu">
            <li>
              <div className="list1">
                <NavLink to="/dashboard">
                  <MdDashboard />
                  <span>Dashboard</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="list1">
                <NavLink to="/transaction">
                  <MdPayment />
                  <span>Transaction</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="list1">
                <NavLink to="/user">
                  <FaUserAlt />
                  <span>User</span>
                </NavLink>
              </div>
            </li>
            <li>
              <div className="list1">
                <NavLink to="/land">
                  <GiIsland />
                  <span>Land</span>
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
