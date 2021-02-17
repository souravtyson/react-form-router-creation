import React from "react";
import "./style.css";
import BasicForm from "./components/BasicForm";
import { Switch, Route } from "react-router-dom";
import About from "./components/router/About";
import Contact from "./components/router/Contact";

export default function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={BasicForm} />
      </Switch>
    </>
  );
}
