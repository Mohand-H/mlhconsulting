import React, { Component } from 'react'
import { MDBCard, MDBCardBody, MDBContainer, MDBCol, MDBInput, Button, MDBRow} from 'mdbreact'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import './login.css'



class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      loggedIn: false 
    } 
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submit = event => {
    this.setState({loggedIn:true})
    
    event.preventDefault()

   axios.post('http://localhost:3001/auth/login', { email: this.state.email, password: this.state.password })

    .then( res => {
      this.setState({loggedinIn:true})
     
      const myToken = res.data.token
      console.log('myToken:',myToken)
      

      localStorage.setItem('token :', myToken)
     
      
    })
  }

  
// }
  render() {
    
      if (this.state.loggedIn){
        return <Redirect to ='/espace-candidate' />
      }
    
    return (
     
    
        <MDBContainer className="mt-5">
        <MDBRow center>
          <MDBCol size='8'>
            <MDBCard>
              <MDBCardBody>
                <form onSubmit={this.submit.bind(this)}>
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
                      onChange={this.handleChange.bind(this)}
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
                      onChange={this.handleChange.bind(this)}
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
          </MDBRow>
        </MDBContainer>
    
    )
  
}
}
export default Login


