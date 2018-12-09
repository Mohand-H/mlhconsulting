import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBRow, MDBCol, MDBInput, Button, form } from 'mdbreact'
import { Redirect } from 'react-router-dom'
import axios from 'axios'



class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      loggedIn: false,

    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    if (window.myToken) {
      this.setState({ loggedIn: true })
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    event.preventDefault()

    axios.post('http://localhost:3001/auth/login', { email: this.state.email, password: this.state.password })

    .then((response) => {
      const myToken = response.headers['x-access-token']
      console.log('myToken:',myToken)

      localStorage.setItem('token', myToken)
      

    })
    
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to='/login' />
    }
    return (
      <div>
        <MDBContainer>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.submit}>
                  <div className="grey-text">
                    <p className="h1 text-center py-4">Se connecter</p>
                    <MDBInput
                      name='email'
                      label="Votre email"
                      icon="envelope"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      name='password'
                      label="Votre mot de passe"
                      icon="lock"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <Button outline gradient='blue' type='submit' value='submit'>Se connecter</Button>
                    <Button href='/signup' outline gradient='blue' type='submit' value='submit'>Cree un compte</Button>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBContainer>
      </div>
    )
  }
}

export default Login


