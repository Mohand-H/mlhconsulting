
import React, {Component} from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class GestionDesAnomalies extends Component {
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
        <Button block size="lg" color="primary" onClick={this.toggle}>La Gestion des anomalies</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>La Gestion des anomalies</ModalHeader>
          <ModalBody>
              <ul>
                  <li>Référencer toutes les anomalies selon les différentes phases de tests</li>
                  <li>Référencer toutes les anomalies selon les différentes phases de tests</li>
                  <p>- De saisir de nouvelles anomalies ou évolutions</p>
                  <p>- De qualifier les dysfonctionnements remontés</p>
                  <p>- De suivre l’évolution de la fiche : en cours d’analyse, en cours de correction…</p>
                  <p>- De planifier les prochaines campagnes de tests</p>
                  <p>- D’accéder à l’historique et la traçabilité des échanges</p>
                  <li>Gestion des régressions</li>
                  <li>Suppression des doublons</li>
                  <li>Recherche de la relation (corrélation) entre anomalies</li>
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

export default GestionDesAnomalies  