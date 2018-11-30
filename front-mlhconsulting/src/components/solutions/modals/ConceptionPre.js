import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class ConceptionPre extends Component {
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
                    <Button block size="lg" gradient="blue" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Conception et préparation des tests</Button>
                    <Collapse isOpen={this.state.collapse}>
                    <ul>
                  <li>Cas de Tests</li>
                  <li>Scénarios</li>
                  <li>Jeux de données</li>
                  <li>Campagnes de tests</li>
                  <li>Le suivi de la couverture des exigences avec mises à jour du référentiel</li>
              </ul>
                    </Collapse>
                </div>
            </di>

        );
    }
}

export default ConceptionPre 