import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBBtn, MDBInput} from 'mdbreact'
import axios from 'axios'


class SpaceCandidate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      candidat: {},
      name: '',
      email: '',
      first_name: '',
      birth_date: '',
      phone_number: '',
      address: '',
      postal_code: '',
      town: '',
      message: '',
      cv: ''
    }
  }

  changeHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitHandler = (event) => {
    event.preventDefault();

    const name = this.state.name
    const email = this.state.email
    const first_name = this.state.first_name
    const birth_date = this.state.birth_date
    const phone_number = this.state.phone_number
    const address = this.state.address
    const postal_code = this.state.postal_code
    const town = this.state.town
    const message = this.state.message
    const cv = this.state.message

    const candidat = {
      name,
      email,
      first_name,
      birth_date,
      phone_number,
      address,
      postal_code,
      town,
      message,
      cv

    }
    console.log('Candidat:', candidat)


    axios.put(`http://localhost:3001/espace/candidat`, candidat,
      {

        Headers: {
          authorization: localStorage.getItem('token')

        }
      })

      

  }
  render() {
    return (
      <MDBContainer className="mt-5">


        <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
          <MDBRow>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='name'
                label="Nom"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.name}
                onChange={this.changeHandler} />
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='first_name'
                label="Prenom"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.first_name}
                onChange={this.changeHandler} />
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='birth_date'
                label=''
                icon="birthday-cake"
                group
                type="date"
                validate
                error="wrong"
                success="right"
                value={this.state.birth_date}
                onChange={this.changeHandler} />
            </div>
          </MDBRow>

          <MDBRow>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='email'
                label="Email"
                icon="envelope"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.email}
                onChange={this.changeHandler} />
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='phone_number'
                label="Numero de téléphone"
                icon="mobile"
                group
                type="number"
                validate
                error="wrong"
                success="right"
                value={this.state.phone_number}
                onChange={this.changeHandler} />
            </div>
          </MDBRow>

          <MDBRow>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='adress'
                label="Adresse"
                icon="map"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.adress}
                onChange={this.changeHandler} />
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='town'
                label="Ville"
                icon="home"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={this.state.town}
                onChange={this.changeHandler} />
            </div>
            <div className="col-md-4 mb-3">
              <MDBInput
                name='postal_code'
                label="Code postal"
                icon="home"
                group
                type="number"
                validate
                error="wrong"
                success="right"
                value={this.state.postal_code}
                onChange={this.changeHandler} />
            </div>
          </MDBRow>

          <MDBRow>

          <MDBInput
          type='file'
          />



          </MDBRow>

          <MDBRow>
            <div className="col-md-8 mb-3">
              <MDBInput
                name='message'
                label="Message"
                icon="pencil"
                group
                type="textarea"
                validate
                error="wrong"
                success="right"
                value={this.state.message}
                onChange={this.changeHandler} />
            </div>
          </MDBRow>

          <div className="col-md-4 mb-3">
            <div className="form-check pl-">
              <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" htmlFor="invalidCheck">
                Agree to terms and conditions
                    </label>
              <div className="invalid-feedback">
                You must agree before submitting.
                    </div>
            </div>
          </div>
          <MDBBtn className="btn btn-unique" outline gradient='blue' type="submit">Envoyer</MDBBtn>
        </form>


      </MDBContainer>
    );
  }
};

export default SpaceCandidate;