import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { history } from "../others/history";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "../pages/Dashboard";
import ListView from "../pages/ListView";
import Login from "../pages/Login";

function Routes() {
  return (
    <>
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
          <Sidebar />
          <Navbar />
          <Switch>
            <Route path="/list-view" component={ListView} />
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default Routes;
