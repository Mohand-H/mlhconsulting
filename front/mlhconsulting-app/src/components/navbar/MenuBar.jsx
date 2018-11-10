import React, { Component } from "react"
import { Image, Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import './MenuBar.css'

class MenuBar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src="./pictures/accueil_Bonhommeloupe.png"/>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} compnentClass={Link} href="/" to="/">
              Accueil
            </NavItem>
            <NavItem eventKey={2} compnentClass={Link} href="/about" to="/About">
              Qui sommes nous
            </NavItem>
            <NavItem eventKey={3} compnentClass={Link} href="/needs" to="/Needs">
              Vos besions
            </NavItem>
            <NavItem eventKey={4} compnentClass={Link} href="/solutions" to="/Solutions">
              Nos solutions
            </NavItem>
            <NavItem eventKey={5} compnentClass={Link} href="/contact" to="/Contact">
              Contact
            </NavItem>
            <NavItem eventKey={6} compnentClass={Link} href="/candidat" to="/Candidat">
              Espace condidat
            </NavItem>
          </Nav>
        </Navbar.Collapse>
        <div class="ligne-divider"></div>
      </Navbar>
    )
  }
};

export default MenuBar;
