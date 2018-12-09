import React, { Component } from 'react'
import { MDBCol, MDBRow, } from 'mdbreact'
import './FooterBar.css'

class FooterBar extends Component {
  render() {
    return (

      <div className='footer'>
        <MDBRow className='text-center text-md-left mt-3 pb-3' color='#757575' >
          <MDBCol md='4' lg='3' xl='3' className='mx-auto mt-3'>
            <p>
              <i className='fa fa-home mr-3' /> 2 Bis rue d’Ivry <br />
              94 400 Vitry Sur Seine
              </p>
            <p>
              <i className='fa fa-envelope mr-3' /> info@mlhconsulting.fr
              </p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mt-3'>
            <p className='text-center text-md-left grey-text'>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              MLH Consulting<i> Mentions légales</i></p>
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mt-3'>
            <div className='text-center text-md-right'>
              <ul className='list-unstyled list-inline'>
                <li className='list-inline-item'>
                  <a className='btn-floating btn-sm rgba-white-slight mx-2' href='#'>
                    <i className='fa fa-facebook' />
                  </a>
                </li>

                <li className='list-inline-item'>
                  <a className='btn-floating btn-sm rgba-white-slight mx-1' href='#'>
                    <i className='fa fa-linkedin' />
                  </a>
                </li>
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default FooterBar;