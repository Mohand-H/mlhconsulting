import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class Grilles extends Component {
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
                <Button block size="lg" color="primary" onClick={this.toggle}>Grille d’effort de tests</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Grille d’effort de tests</ModalHeader>
                    <ModalBody>
                        <p>La grille d'effort de test permet de choisir et définir les différentes techniques de test à mettre en place sur le projet :</p>
                        <p>Par exemple :</p>
                        <p> Des tests unitaires, manuels ou automatisés</p>
                        <ul>
                            <li>Des tests d'intégrations, manuels ou automatisés</li>
                            <li>Des tests systèmes, manuels ou automatisés</li>
                            <li>Eventuellement des tests de performance</li>
                            <li>Eventuellement des tests de sécurité</li>
                        </ul>
                        <p>Pour chaque item, sont identifiés des critères de criticité afin d’associer l’effort de tests en adéquation avec l’importance de l’item :</p>
                        <p>Par exemple :</p>
                        <ul>
                            <li>Nombre d’utilisateurs</li>
                            <li>Fréquence d’utilisation</li>
                            <li>Complexité technique de la fonctionnalité</li>
                            <li>Fonctionnalité métier critique</li>
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

export default Grilles