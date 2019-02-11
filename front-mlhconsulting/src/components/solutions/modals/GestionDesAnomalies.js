import React, { Component } from 'react'
import { Button, Collapse } from 'mdbreact'

class GestionDesAnomalies extends Component {
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
                    <Button block size="lg" gradient="blue"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>La Gestion des anomalies</Button>
                    <Collapse isOpen={this.state.collapse}>
                    <ul>
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
                    </Collapse>
                </div>
            </di>

        );
    }
}

export default GestionDesAnomalies