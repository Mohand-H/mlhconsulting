import React, { Component } from "react"
import { Form, FormGroup, Input, Label, Button } from "reactstrap"
import "./Contact.css"
class Contact extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }





  render() {

    return (
        <Form className="form-contact">
          <h1>Contact</h1>
          <FormGroup>
            <Label for="name"></Label>
            <Input
              type="text"
              name="name"
              placeholder="Nom"
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup email>
            <Label for="email"></Label>
            <Input type="email" 
            name="email" 
            placeholder="Email"
            onChange={this.handleChange} />
          </FormGroup>

          <FormGroup message>
            <Label for="messag"></Label>
            <Input
              type="textarea"
              name="message"
              placeholder="Message..."
              onChange={this.handleChange}/>
          </FormGroup>

          <FormGroup chek>
            <Input type="checkbox" name="check" id="exampleCheck" />
            <Label for="Check" check>En soumettant ce formulaire j'accepte que les données saisies
              soient exploitées pour permettre de me recontacter. Ces
              informations ne seront pas transmises à des tiers et à tout moment
              je pourrai demander la suppression des ces données.
            </Label>
          </FormGroup>
          <Button className="btn-send">Envoyer</Button>
        </Form>
    )
  }
}

export default Contact;
