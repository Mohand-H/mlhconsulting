import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, Button, MDBInput } from 'mdbreact'
import { Redirect } from 'react-router-dom'
import axios from 'axios'




class Register extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      register: false,
      success: false
    }

    }
     change = event => {
       this.setState({ [event.target.name]: event.target.value })

     }
    
   
     handleSubmit = event => {
       event.preventDefault()
       console.log('this.state:', this.state)
   
      const email= this.state.email
      const password = this.state.password

      this.setState({
        loading: true
      })

      const data = {
        email,
        password

    }
      axios.post('http://localhost:3001/auth/signup', data)
      .then(() => {
        this.setState({success: true})

      })
    }


    render() {
      if (this.state.register) {
        return <Redirect to='/space' />
      }
      return (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="6">
              <form className='form-register' onSubmit={this.handleSubmit.bind(this)} >
                <div className="grey-text">
                  <p className="h1 text-center mb-4">Je me crée un espace candidat</p>
                
                  <MDBInput
                    name='email'
                    label='Votre email'
                    icon='envelope'
                    group type='email'
                    validate error='wrong'
                    success='right'
                    value={this.state.email}
                    onChange={this.change.bind(this)}

                  />
                  <MDBInput
                    name='password'
                    label='Votre mot de passe'
                    icon='lock'
                    group type='text'
                    validate error='wrong'
                    success='right'
                    value={this.state.password}
                    onChange={this.change.bind(this)}
                  />

                  <div className="text-center mt-4">
                    <Button outline gradient='blue' type='submit' value='Submit' onClick={this.reset}>Je crée un espace candidat</Button>
                  </div>
                </div>
              </form>
              {this.state.success ? <p>Enregistrer</p> : null }
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )
    }
  }

  export default Register