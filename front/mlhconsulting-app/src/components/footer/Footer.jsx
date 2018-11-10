import React, { Component } from 'react';
import { Col, Container, Row, Footer } from "mdbreact"
import "./Footer.css"

class FooterPage extends Component {
  render() {
    return (
      <Footer className="font-small pt-4 mt-4">
        
          <Container fluid className="footer-copyright">
        
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a>MLH Consulting | </a>
            <a href="#">Montions légales</a>
          
          </Container>
      
      </Footer>
    )
  }
}

export default FooterPage
