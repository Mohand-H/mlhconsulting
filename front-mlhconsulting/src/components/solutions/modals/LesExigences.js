import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class LesExigences extends React.Component {
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
        <Button block size="lg" color="primary" onClick={this.toggle}>Les exigences</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader color="primary" toggle={this.toggle}>Les exigences</ModalHeader>
          <ModalBody>
            <ul>
              <li>Le référentiel des exigences permet de collecter et piloter l'ensemble des exigences explicites et implicites d’une application ou d’un ensemble d’applications, tant d'un point de vue fonctionnel que technique.</li>
              <p>Au cours du projet, le référentiel permet également</p>
              <li>De parcourir l'ensemble des exigences initiales et s'assurer de la compréhension réciproque des éléments suivants : description, réponse, statut</li>
              <li>D’arbitrer et traiter le cas des exigences « oubliées » dans le périmètre initial et de définir avec le client la réponse au besoin</li>
              <li>Si le projet est itératif ou par lots, de planifier l'itération prévisionnelle de chaque exigence</li>
              <li>D'identifier les changements et de les gérer</li>
            </ul>
          </ModalBody>
          <ModalFooter >
            <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default LesExigences 