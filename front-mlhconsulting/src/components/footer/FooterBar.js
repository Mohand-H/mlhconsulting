import React, { Component } from "react"
import { MDBCol, MDBRow, MDBContainer} from "mdbreact"
import './FooterBar.css'


class FooterBar extends Component {
  render() {
    return (
     
        <MDBRow className="Footer">
          <MDBCol md="6">
            <ul className="fa-ul">
              <li><i class="fas fa-at"></i>  Info@mlhconsulting.fr</li>
              <li><i class="fas fa-map-marker-alt"></i>  2 Bis rue d’Ivry<br></br>94400 Vitry Sur Seine</li>
            </ul>
          </MDBCol>

          <MDBCol md="3">
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="#"> MLH Consulting</a>
          </MDBCol>

          <MDBCol md="3">
            <a type="button" class="btn-floating btn-large btn-fb" ripple-radius><i class="fa fa-facebook"></i></a>
            <a className="btn-floating btn-sm btn-li mx-1">
              <i className="fa fa-linkedin"> </i>
            </a>


          </MDBCol>
        </MDBRow>

   

    );
  }
}

export default FooterBar;