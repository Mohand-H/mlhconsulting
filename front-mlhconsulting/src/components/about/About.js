import React, { Component } from 'react'
import { MDBRow, MDBCol, View, Mask } from 'mdbreact'
import Partenair from "./logo"
import './about.css'



class About extends Component {


  render() {
    return (
      <div className='container-fluid'>
        <MDBRow className='section-1'>
          <MDBCol size='12' sm='12'>
          <h1>Notre vision et nos valeurs </h1>
            <h4>L’industrialisation du test logiciel : clé de la maîtrise des risque IT</h4>
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
          <MDBCol size='12' sm='6' className='text-equipe'>
            <h1>Nos équipes sont spécialistes en test logiciel </h1>
            <p>A travers nos équipes, bénéficiez des meilleures méthodes de test
              et outils de test pour définir votre stratégie, construire votre
              patrimoine et vos campagnes de tests logiciels. Professionnels
              passionnés par la qualité logicielle et experts en test des
              systèmes d’information, les équipes de MLH Consulting sont dotées
              de compétences polyvalentes :</p>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/quisommesnous_nosequipes.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
        </MDBRow>
        <MDBRow className='section-2'>
          <MDBCol size='12' sm='12' className='header'>
            <h1>Nos partenaires </h1>
          </MDBCol>
          </MDBRow> 
       <MDBRow>
       < Partenair />
       </MDBRow>
 
     
      
      </div>
     
   
      
    )
  }
}

export default About
