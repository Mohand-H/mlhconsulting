import React, { Component } from "react"
import "./App.css";
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "./components/home/HomePage"
import About from "./components/about/About"
import Needs from "./components/needs/Needs"
import Solutions from "./components/solutions/Solutions"
// import FormsPage from "./components/contact/FormsPage"
import Contact from "./components/contact/Contact"
import Candidat from "./components/candidat/Candidat"
import MenuBar from "./components/menuBar/MenuBar"
import FooterBar from "./components/footer/FooterBar"



class App extends Component {





  render() {
    return (
      
      <Router>
        <div >
          <MenuBar />
          <Route exact path="/" component={HomePage} /> 
          <Route  path="/about" component={About} /> 
          <Route  path="/needs" component={Needs} /> 
          <Route  path="/solutions" component={Solutions} />
          <Route  path="/contact" component={Contact}/>
          <Route  path="/candidat" component={Login} />
          <FooterBar />
        </div>
      </Router>
    )
  }
}

export default App;
