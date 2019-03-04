
import React, { Component } from 'react'
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse } from 'mdbreact'
import './MenuBar.css'

class MenuBar extends Component {
  state = {
    collapseID: ''
  }

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }))

  render() {
    return (

      <Navbar dark expand='md' style={{ marginTop: '0px', marginRigt: '' }} >
        <NavbarBrand>

          <NavLink style={{ color: 'black' }} className='home' to='./' ><img href='./home' src='./pictures/accueil_Bonhommeloupe.png' style={{ width: '150px' }} alt='logo' /></NavLink>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <Collapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <NavbarNav right>
            <NavItem>
              <NavLink style={{ color: 'black' }} className='home' to='./'>Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'black' }} className='about' to='about'>Qui sommes-nous</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'black' }} className='needs' to='needs'>Vos besions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'black' }} className='solutions' to='solutions'>Nos solutions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: 'black' }} className='contact' to='contact'>Contact</NavLink>
            </NavItem><NavItem>
              <NavLink style={{ color: 'black' }} className='login' to='login'>Espace candidat</NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    )
  }
}
export default MenuBar