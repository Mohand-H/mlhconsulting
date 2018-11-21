import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import './Modal.css'


class Execution extends Component {
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
                <Button block size="lg" color="primary" onClick={this.toggle}>Exécution des campagnes de tests SQLI</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Exécution des campagnes de tests SQLI</ModalHeader>
                    <ModalBody>
                        <p>Création des campagnes en associant tous les scénarios permettant une couverture des exigences, comme défini dans la stratégie de tests</p>
                        <p>Au cours de l’exécution, à tout moment avoir des indicateurs permettant de connaître</p>
                        <p>- Les scénarios exécutés / scénarios prévus</p>
                        <p>- Les nombres d’anomalies
                            <br></br>Par exigences
                            <br></br>Par sévérité
                            <br></br>Par campagne
                        </p>
                        <p>- Par scénarios</p>
                        <img src='./pictures/execution.png' />
                       
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default Execution 