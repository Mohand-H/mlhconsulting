import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class Grilles extends Component {
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
                    <Button block size="lg" gradient="blue" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Grille d’effort de test</Button>
                    <Collapse isOpen={this.state.collapse}>
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
                    </Collapse>
                </div>
            </di>

        );
    }
}

export default Grilles