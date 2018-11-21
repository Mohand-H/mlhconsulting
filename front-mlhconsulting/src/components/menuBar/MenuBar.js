import React, { Component }from "react"
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse} from "mdbreact"
import './MenuBar.css'





class MenuBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = this.setState({ isOpen: !this.state.isOpen });

  render() {
    return (

      <Navbar color='black' dark expand="md">
          <NavbarBrand>
            <div className='logo'>
              <img href='about' src='./pictures/accueil_Bonhommeloupe.png' className='logo' alt='logo'/>
            </div>
           
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleCollapse} />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav >
              <NavItem active>
                <NavLink to="/">Accueil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="about">Qui sommes-nous</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/needs">Vos besions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/solutions">Nos solutions</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/candidat">Espace candidature</NavLink>
              </NavItem>
            </NavbarNav>
            
          </Collapse>
      </Navbar>
    );
  }
}

export default MenuBar;