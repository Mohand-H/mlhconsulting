import React, { Component } from 'react'
import { Button, Collapse } from 'mdbreact'

class CompagneDeTest extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);

        this.state = {
            collapse: false,
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <di>
                <div>
                    <Button block size="lg" gradient="blue" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Campagne de test</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <ul>
                            <li>Il s’agit de déterminer les dépendances entre les scénarios de test afin d’organiser leur enchainement</li>
                            <li>Pour cela, il est utile d’établir un diagramme des dépendances, et de se mettre au plus près des conditions réelles d’utilisations de l’application</li>
                            <li>L’état et l’évolution des données d’essai doit être compatible avec l’ordonnancement des scénarios</li>
                        </ul>
                        <p>Procéder à un choix judicieux des tests initiaux pour :</p>
                        <p> - Tester rapidement les fonctions principales du système</p>
                        <p> - Traiter les cas simples au début et les situations complexes vers la fin</p>
                        <p> - Evaluer succinctement la qualité globale du système</p>
                    </Collapse>
                </div>
            </di>

        );
    }
}

export default CompagneDeTest