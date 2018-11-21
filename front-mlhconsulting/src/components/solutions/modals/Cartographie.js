import React, { Component } from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class Cartographie extends Component {
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
                <Button block size="lg" color="primary" onClick={this.toggle}>Cartographie</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Cartographie</ModalHeader>
                    <ModalBody>
                        <p>Dans le cadre de la préparation des tests, il faut disposer d’une cartographie de l’application, qui recense tous les objets fonctionnels et techniques :</p>
                        <ul>
                          <li>A partir du référentiel d’exigences et des spécifications détaillées, recenser tous les cas d’utilisation de l’application pour définir le périmètre des composants à tester</li>
                          <li>Détailler chaque cas d’utilisation avec toutes les fonctionnalités attendues (par exemple les éléments de menus)</li>
                          <li>Ajouter un bloc avec les exigences techniques et les interfaces</li>
                        </ul>
                        <p>On obtient ainsi une nouvelle &quot;cartographie&quot; qui recense, avec une granularité homogène, tous les objets fonctionnels et techniques à tester</p>
                        <p>L’effort de tests est associé aux exigences priorisées afin de répondre aux objectifs de couverture définis en stratégie pour une release donnée</p>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default Cartographie 