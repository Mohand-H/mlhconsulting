import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class CompagneDeTest extends Component {
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
                <Button block size="lg" color="primary" onClick={this.toggle}>Campagne de test</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Campagne de test</ModalHeader>
                    <ModalBody>
                        <ul>
                            <li>Il s’agit de déterminer les dépendances entre les scénarios de test afin d’organiser leur enchainement</li>
                            <li>Pour cela, il est utile d’établir un diagramme des dépendances, et de se mettre au plus près des conditions réelles d’utilisations de l’application</li>
                            <li>L’état et l’évolution des données d’essai doit être compatible avec l’ordonnancement des scénarios</li>
                        </ul>
                        <p>Procéder à un choix judicieux des tests initiaux pour :</p>
                        <p> - Tester rapidement les fonctions principales du système</p>
                        <p> - Traiter les cas simples au début et les situations complexes vers la fin</p>
                        <p> - Evaluer succinctement la qualité globale du système</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default CompagneDeTest 