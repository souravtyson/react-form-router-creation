import React from "react";
import "./style.css";
import BasicForm from "./components/BasicForm";
import { Switch, Route } from "react-router-dom";
import About from "./components/router/About";
import Contact from "./components/router/Contact";
import Nav from "./components/Nav";
import Shop from "./components/router/Shop";
import ShopDetails from "./components/router/ShopDetails";

export default function App() {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/form" component={BasicForm} />
        <Route exact path="/shop" component={Shop} />
        <Route path="/shop/:id" component={ShopDetails} />
      </Switch>
    </>
  );
}
