import React from "react"
import { Col, Container, Row, Footer } from "mdbreact"
import "./Footer.css"

class FooterPage extends React.Component {
  render() {
    return (
      <Footer className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <Container fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a>MLH Consulting | </a>
            <a href="#">Montions légales</a>
          </Container>
        </div>
      </Footer>
    )
  }
}

export default FooterPage
