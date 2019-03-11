import React, { Component } from 'react'
import { MDBContainer, MDBRow,MDBCol, Button, MDBInput, MDBCard, MDBCardBody } from 'mdbreact'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './login.css'




class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: '',
      register: false
      
    }

  }
  change = event => {
    this.setState({ [event.target.name]: event.target.value })

  }


  handleSubmit = event => {
    this.setState({register: true})
    event.preventDefault()
    console.log('this.state:', this.state)
    const name= this.state.name
    const email = this.state.email
    const password = this.state.password

    

    const data = {
      name,
      email,
      password

    }
    axios.post('http://localhost:3001/auth/signup', data)
      .then((res) => {
        console.log('Res:', res)
        this.setState({ register: true })

      })
  }



  


  render() {
    if (this.state.register) {
      return <Redirect to='/login' />
    }
    return (
      <MDBContainer className="mt-6">
        <MDBRow center> 
          <MDBCol size='8'>
            <MDBCard>
              <MDBCardBody>
                <form className='form-register' onSubmit={this.handleSubmit.bind(this)} >
                  <div className="grey-text">
                    <p className="h2 text-center mb-4">Je me crée un espace candidat</p>
                    <MDBInput
                      name='name'
                      label='Votre nom'
                      icon='user'
                      group type='text'
                      validate error='wrong'
                      success='right'
                      value={this.state.name}
                      onChange={this.change.bind(this)} />

                    <MDBInput
                      name='email'
                      label='Votre email'
                      icon='envelope'
                      group type='email'
                      validate error='wrong'
                      success='right'
                      value={this.state.email}
                      onChange={this.change.bind(this)} />
                    <MDBInput
                      name='password'
                      label='Votre mot de passe'
                      icon='lock'
                      group type='text'
                      validate error='wrong'
                      success='right'
                      value={this.state.password}
                      onChange={this.change.bind(this)} />

                    <div className="text-center mt-4">
                      <Button outline gradient='blue' type='submit' value='Submit' onClick={this.reset}>Je crée un espace candidat</Button>
                    </div>
                  </div>
                </form>
                {this.state.success ? <p>Enregistrer</p> : null}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow >
      </MDBContainer >
    )
  }
}

export default Register