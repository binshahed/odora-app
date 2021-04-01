import { render } from "react-dom";
import { Router, Link } from "@reach/router";

import Home from "../components/Home";
import Nav from "../components/Nav";
import About from "../components/About";
import Product from "../components/Product";
import Contact from "../components/Contact";


function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Home path="/" />
        <About path="/about"/>
        <Product path="/product"/>
        <Contact path="contact"/>
      </Router>
    </div>
  );
}

export default App;
