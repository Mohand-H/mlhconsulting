import React, { Component } from "react"
import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import About from "./components/about/About";
import Needs from "./components/needs/Needs";
import Solutions from "./components/solutions/Solutions";
import Contact from "./components/contact/Contact";
import Candidat from "./components/candidat/Candidat";
import Navbar from "./components/navbar/MenuBar";
import FooterPage from "./components/footer/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} /> 
          <Route  path="/about" component={About} /> 
          <Route  path="/needs" component={Needs} /> 
          <Route  path="/solutions" component={Solutions} />
          <Route  path="/contact" component={Contact} />
          <Route  path="/candidat" component={Candidat} />
          <FooterPage />
        </div>
      </Router>
    );
  }
}

export default App;
