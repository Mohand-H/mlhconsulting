import React, { Component } from 'react';
import { Button, Collapse } from 'mdbreact';

class LesExigences extends Component {
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
          <Button block size="lg" gradient="blue" onClick={this.toggle} style={{ marginBottom: "1rem" }}>Les exigences</Button>
          <Collapse isOpen={this.state.collapse}>
            <ul>
              <li> Le référentiel des exigences permet de collecter et piloter l'ensemble des exigences explicites et implicites d’une application ou d’un ensemble d’applications, tant d'un point de vue fonctionnel que technique.</li>
              Au cours du projet, le référentiel permet également
            <li>De parcourir l'ensemble des exigences initiales et s'assurer de la compréhension réciproque des éléments suivants : description, réponse, statut</li>
              <li>D’arbitrer et traiter le cas des exigences « oubliées » dans le périmètre initial et de définir avec le client la réponse au besoin</li>
              <li>Si le projet est itératif ou par lots, de planifier l'itération prévisionnelle de chaque exigence</li>
              <li>D'identifier les changements et de les gérer</li>
            </ul>
          </Collapse>
        </div>
      </di>

    );
  }
}

export default LesExigences 