import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-links">
        <Link to="/" className="sidebar-logo">
          <img src="/Logo.png" alt="" />
        </Link>
        <Link to="/">
          <i class="fa-solid fa-bars-progress"></i>Dashboard
        </Link>
        <Link to="/list-view">
          <i class="fa-solid fa-apple-whole"></i>List View
        </Link>
      </div>
      <div className="sidebar-buttons">
        <button className="button">LOGOUT</button>
      </div>
    </div>
  );
}

export default Sidebar;
