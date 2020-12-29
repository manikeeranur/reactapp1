import React from "react";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Work from "./Work";
import About from "./About";
import Contact from "./Contact";
import Blog from "./Blog";
export default function App() {
  return (
    <Router>
      <Navbar />
      <Route path='/' exact component={Work} />
      <Route path='/About' component={About} />
      <Route path='/Blog' component={Blog} />
      <Route path='/Contact' component={Contact} />
    </Router>
  );
}
