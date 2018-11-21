import React,{Component } from 'react';
import { Container, Row, Col, Input, Button } from 'mdbreact';
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css';




class FormsPage extends Component  {
  constructor(){
    super()

    this.state = {
        name: '',
        email: '',
        message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
}

async handleSubmit(event) {
    event.preventDefault()

    const { name, email, message } = this.state

    const from = await axios.post('http://localhost:3001/form/contact',{
        name,
        email,
        message    
    })
}
  render() {
    return(
     
        <Row>
          <Col md="6">
            <form onSubmit={this.handleSubmit}>
              <p className="h5 text-center mb-4">Contact</p>
              <div className="grey-text">
                <Input 
                label="Votre nom"  
                group type="text" 
                validate error="wrong" 
                success="right"
                onChange={this.handleChange} />

                <Input 
                label="Your email"
                group type="email" 
                validate error="wrong" 
                success="right"
                onChange={this.handleChange} />

                <Input 
                label="Subject" 
                group type="text" 
                validate error="wrong"
                 success="right"
                 onChange={this.handleChange} />

                <Input 
                type="textarea" 
                rows="2" 
                label="Your message" 
                onChange={this.handleChange} />
              </div>
              <div className="text-center">
                <Button color="primary" outline >ENVOYER</Button>
              </div>
            </form>
          </Col>
        </Row>
   
    );
  }
};

export default FormsPage;

