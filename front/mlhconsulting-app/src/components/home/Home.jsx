import React, { Component } from "react"
import { Link } from "react-router-dom"
// import { Col, Container, Row, Footer } from "mdbreact"
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap"
import "./Home.css"

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron fluid>
          <container>
            <h2>MLH Consulting</h2>
            <p>Société de conseil et réalisation, nous mettons l’IT au service de votre métier. Notre objectif : comprendre vos challenges pour vous accompagner au cœur des mutations technologiques.</p>
            <h2>Tests logiciels et qualité du SI</h2>
            <Button bsStyle="primary">Contactez-nous</Button>
          </container>
        </Jumbotron>
        <Row>
          <Col xs={12} md={6} className="image">
            <Image src="./pictures/accueil_equipe.jpg" classeName="home-equipe" responsive/>
          </Col>
          <Col xs={12} md={6} className="equipe-expert">
            <div className="expert">
              <h1>Une équipe d'experts en test</h1>
              <p>Des professionnels passionnés une haute compétence technique, en permanence à l’écoute de leurs clients</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="equipe-atous">
            <div className="atous">
              <h1>Nos atouts</h1>
              <ul className="itmes-atous">
                <li>Réponse pertinente et complète aux besoins en matière de test logiciel</li>
                <li>Indépendance et objectivité d’une société « pure player »</li>
                <li>Professionnels du test très motivés</li>
                <li>Services de proximité, disponibles, maîtrisés et réversibles</li>
                <li>Optimisation de qualité-coût-délai</li>
                <li>Innovation et originalité</li>
                <li>Réactivité et souplesse</li>
                <li>Pure Player en test depuis 1995 100 collaborateurs</li>
                <li>Interventions Grands Comptes & Mid-Market</li>
                <li>Industrie / Energie / Environnement</li>
                <li>Banque / Assurance / Services</li>
                <li>15 ans de partenariat avec HP Software</li>
                <li>MLH Consulting est une société indépendante</li>
                <li>Organisme de formation agréé n° 00 00 00 000 00</li>
              </ul>
            </div>
          </Col>
          <Col xs={12} md={6} className="">
            <Image src="./pictures/accueil_nosatous.jpg" classeName="" responsive/>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={12} className="buttons">
          <h1>Qualité de votre SI, nous pouvons vous aider. vous chercher a</h1>
          </Col>
          <Col xs={6} md={12} className="buttons">
            <a href="solutions" class="btn btn-primary btn-circle"><i class="fa fa-user"></i>AMELIORER VOS PRATIQUES DE TEST</a>
            <a href="solutions" class="btn btn-primary btn-circle"><i class="fa fa-user"></i>AUTOMATISER VOS TESTS</a>
            <a href="solutions" class="btn btn-primary btn-circle"><i class="fa fa-user"></i>EXTERNALISER VOS TESTS</a>
            <a href="solutions" class="btn btn-primary btn-circle"><i class="fa fa-user"></i>TESTER VOS APPLICATIONS DIGITALES</a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="image">
            <Image src="./pictures/accueil_equipe.jpg" classeName="notre-metier" responsive/>
          </Col>
          <Col xs={12} md={6} className="equipe-expert">
            <div className="metier">
              <h1>Notre Métier Votre Carrière</h1>
             
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Home
