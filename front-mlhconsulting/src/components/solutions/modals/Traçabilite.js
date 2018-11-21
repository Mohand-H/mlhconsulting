import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import './Modal.css'

class Traçabilite extends Component {
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
                <Button block size="lg" color="primary" onClick={this.toggle}>Traçabilité</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Traçabilité</ModalHeader>
                    <ModalBody>
                        <p>Les exigences qui caractérisent le produit doivent être reliées par un lien de traçabilité avec les cas de tests, de façon à pouvoir mesurer en permanence la couverture des exigences par les tests réalisés et associer l’effort de test</p>
                        <img className='modal-07' src='./pictures/Modal07.png' />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default Traçabilite  