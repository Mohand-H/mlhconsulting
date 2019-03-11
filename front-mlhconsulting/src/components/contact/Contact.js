import React, { Component } from 'react'
import { MDBRow, MDBCol, Input, Button, View, Mask, Fa } from 'mdbreact'
import './contact.css'
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      subject: '',
      message:'',
      text: ''
    }
  }
  
  change = event => {
    this.setState({ [event.target.name]: event.target.value })
   
  }
 
  onSubmit = event => {
    event.preventDefault()
    // console.log(this.state)
    const name = this.state.name
    const email = this.state.email
    const subject = this.state.subject
    const text = this.state.message
    this.setState({ name:''})
    this.setState({ email:''})
    this.setState({ subject:''})
    this.setState({ message:''})
  

    const data = {
      name,
      email,
      subject,
      text
    }

    


    axios.post('http://localhost:3001/contact/form', data)
      .then(response => {
        console.log(response);
        this.setSet({
          loading: false,
          message: response.data
        })
      })

      // .catch(err => {
      //   console.log(err);
      //   this.state({
      //     loading: false
      //   })
      // })
    
  }

  render() {
    return (
      <div className='#'>
        <MDBRow>
          <MDBCol size='12' className='formulair'>
            <View className='#' >
              <img className='img-fluid' src='./pictures/contact.jpg' alt='img-responsive' responsive />
              <Mask>
                <MDBRow around>
                  <MDBCol size='6'>
                    <form className='form-contact' onSubmit={this.onSubmit.bind(this)}>
                      <h1>Contact</h1>
                      <div className='grey-text'>
                        <Input
                          name='name'
                          label='Votre nom'
                          icon='user'
                          group type='text'
                          validate error='wrong'
                          success='right'
                          value={this.state.name}
                          onChange={this.change.bind(this)}
                        />
                        <Input
                          name='email'
                          label='Votre email'
                          icon='envelope'
                          group type='email'
                          validate error='wrong'
                          success='right'
                          value={this.state.email}
                          onChange={this.change.bind(this)}
                        />
                        <Input
                          name='subject'
                          label='Sujet'
                          icon='tag'
                          group type='text'
                          validate error='wrong'
                          success='right'
                          value={this.state.subject}
                          onChange={this.change.bind(this)}
                        />
                        <Input
                          name='message'
                          type='textarea'
                          rows='2'
                          label='Votre message'
                          icon='pencil'
                          value={this.state.message}
                          onChange={this.change.bind(this)}
                        />
                      </div>
                      <div className='text-center'>
                        <Button outline gradient='blue' type='submit' value='Reset'>Envoyer<Fa icon='paper-plane-o' className='Envoyer' /></Button>
                      </div>
                      
                    </form>
                    
                  </MDBCol>
                </MDBRow>
              </Mask>
            </View>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}



export default Contact;



