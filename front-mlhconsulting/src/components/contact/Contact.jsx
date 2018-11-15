import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import "./Contact.css";
import axios from 'axios'

class Contact extends Component {
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
    return (
        <Form onSubmit={this.handleSubmit} className="form-contact">
          <h1>Contact</h1>
          <FormGroup>
            <Input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={this.handleChange} />
          </FormGroup>

          <FormGroup email>
            <Input type="email" 
            name="email" 
            placeholder="Email"
            onChange={this.handleChange} />
          </FormGroup>

          <FormGroup message>
            <Input
              type="textarea"
              name="message"
              placeholder="Message..."
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup chek>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="Check">En soumettant ce formulaire j'accepte que les données saisies
              soient exploitées pour permettre de me recontacter. Ces
              informations ne seront pas transmises à des tiers et à tout moment
              je pourrai demander la suppression des ces données.
            </Label>
          </FormGroup>
          <Button bsStyle="primary">Submit</Button>
        </Form>
    )
  }
}

export default Contact;
