import React, { Component } from 'react'
import { Button, Collapse } from 'mdbreact'

class Traçabilite extends Component {
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
                    <Button block size="lg" gradient="blue"  onClick={this.toggle} style={{ marginBottom: "1rem" }}>Traçabilité</Button>
                    <Collapse isOpen={this.state.collapse}>
                    <p>Les exigences qui caractérisent le produit doivent être reliées par un lien de traçabilité avec les cas de tests, de façon à pouvoir mesurer en permanence la couverture des exigences par les tests réalisés et associer l’effort de test</p>
                        <img className='modal-07' src='./pictures/Modal07.png' />
                    </Collapse>
                </div>
            </di>

        );
    }
}

export default Traçabilite 