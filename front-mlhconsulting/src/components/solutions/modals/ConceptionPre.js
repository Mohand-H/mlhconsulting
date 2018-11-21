import React, {Component} from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class ConceptionPre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <Button block size="lg" color="primary" onClick={this.toggle}>Conception et préparation des tests</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Conception et préparation des tests</ModalHeader>
          <ModalBody>
              <ul>
                  <li>Cas de Tests</li>
                  <li>Scénarios</li>
                  <li>Jeux de données</li>
                  <li>Campagnes de tests</li>
                  <li>Le suivi de la couverture des exigences avec mises à jour du référentiel</li>
              </ul>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ConceptionPre  