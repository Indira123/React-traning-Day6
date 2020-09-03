import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
// Views
import Users from "./components/Users";
import Contact from "./components/Contact";
import About from "./components/About";
import NoMatch from "./components/NoMatch";
import Home from "./components/Home";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Users} exact path="/users" />
        <Route component={About} exact path="/aboutus" />
        <Route component={Contact} exact path="/contact" />
        <Route component={NoMatch} path="*"></Route>
      </Switch>
    );
  }
}
