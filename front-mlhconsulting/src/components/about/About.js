import React, { Component } from 'react'
import { MDBRow, MDBCol, View, Mask } from 'mdbreact'
import Partenairs from "./Logo"
import './About.css'



class About extends Component {


  render() {
    return (
      <div className='container-fluid'>
        <MDBRow className='section-1'>
          <MDBCol size='12' sm='12'>
            <h1>Notre vision et nos valeurs </h1>
            <h3>L’industrialisation du test logiciel : clé de la maîtrise des risque IT</h3>
            <p>Dans l’ère de la globalisation de l’économie, la révolution
              numérique accélère la transformation digitale des modèles
              économiques des entreprises. Les technologies de mobilité, de
              cloud computing, de big data s’intègrent rapidement avec les
              systèmes d’information, l’outil stratégique des entreprises. Cette
              intégration se fait généralement avec les méthodes agiles, qui
              dynamisent et accélère le rythme des évolutions des SI. Les
              besoins en test, en croissance rapide dans un tel contexte, sont
              au centre des préoccupations des DSI. Face à l’explosion des
              besoins en tests, et devant la nécessité de maîtriser ces
              activités, un nouveau métier et une nouvelle industrie du test
              logiciel sont en train d’émerger.
          </p>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-2'>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/quisommesnous_nosequipes.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>

          <MDBCol size='12' sm='6' className='text-equipe'>
            <h1>Nos équipes sont spécialistes en test logiciel </h1>
            <p>A travers nos équipes, bénéficiez des meilleures méthodes de test
              et outils de test pour définir votre stratégie, construire votre
              patrimoine et vos campagnes de tests logiciels. Professionnels
              passionnés par la qualité logicielle et experts en test des
              systèmes d’information, les équipes de MLH Consulting sont dotées
              de compétences polyvalentes :</p>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-2'>
          <MDBCol size='12' sm='12' className='header'>
            <h1>Nos partenaires </h1>
            <h3>Un partenariat solide et durable:</h3>
            <p>
              Partenaire historique de HP software, MLH Consulting cultive son
              excellence dans son effort continu de co-innovation avec l’éditeur
              et dans l’intégration des solutions HP ALM au service des clients.
              Grâce de sa maîtrise de ces gammes d’outils depuis 1995, MLH
              Consulting facilite le déploiement des outils HP ALM par ses
              propres innovations. Grâce à la maîtrise de ses gammes d’outils
              depuis 1995, Dalisys facilite le déploiement des outils HP ALM par
              ses propres innovations
            </p>
          </MDBCol>
          <MDBCol>
            < Partenairs />
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default About
