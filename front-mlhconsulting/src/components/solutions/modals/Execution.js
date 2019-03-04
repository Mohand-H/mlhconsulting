import React, { Component } from 'react'
import { Button, Collapse } from 'mdbreact'

class Execution extends Component {
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
                    <Button block size="lg" gradient="blue" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Exécution des campagnes de tests SQLI</Button>
                    <Collapse isOpen={this.state.collapse}>
                        <p>Création des campagnes en associant tous les scénarios permettant une couverture des exigences, comme défini dans la stratégie de tests</p>
                        <p>Au cours de l’exécution, à tout moment avoir des indicateurs permettant de connaître</p>
                        <p>- Les scénarios exécutés / scénarios prévus</p>
                        <p>- Les nombres d’anomalies
                            <br></br>Par exigences
                            <br></br>Par sévérité
                            <br></br>Par campagne
                        </p>
                        <p>- Par scénarios</p>
                        <img src='./pictures/execution.png' alt='schema' />

                    </Collapse>
                </div>
            </di>

        );
    }
}

export default Execution 