import React, { Component } from "react"
import "./App.css";
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from "./components/home/homePage"
import About from "./components/about/about"
import Needs from "./components/needs/needs"
import Solutions from "./components/solutions/solutions"
import Contact from "./components/contact/contact"
import MenuBar from "./components/menuBar/menuBar"
import FooterBar from "./components/footer/footerBar"
import Login from "./components/candidat/login"
import Register from "./components/candidat/register"
import Space from "./components/candidat/spaceCandidat"
import AllCandidats from "./components/admin/listCandidate"



class App extends Component {


  render() {
    return (

      <Router>
        <div >
          <MenuBar />
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/needs" component={Needs} />
          <Route path="/solutions" component={Solutions} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Register} />
          <Route path="/espace-candidate" component={Space} />
          <Route path="/list-candidates" component={AllCandidats} />
          <FooterBar />
        </div>

      </Router>
    )
  }
}

export default App;
