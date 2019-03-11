import React, { Component } from 'react'
import { MDBRow, Button, MDBCol, Mask, View } from 'mdbreact'
import './home.css'


class HomePage extends Component {
  render() {
    return (

      <div>
        <MDBRow className='section-0'>
          <MDBCol size='12' sm='' >
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/accueil.jpg' alt='img-responsive' />

              <Mask overlay='white-slight' />

              <Mask overlay='black-strong' style={{ flexDirection: 'column', height: '120vh' }} className='flex-center '>
                <h1 className='white-text'>MLH Consulting</h1>
                <p className='white-text'> Société de conseil et réalisation, nous mettons l’IT au service de votre métier. Notre objectif : comprendre vos challenges pour vous accompagner au cœur des mutations technologiques.</p>
                <h2 className='white-text'>Tests logiciels et qualité du SI</h2>
               
              </Mask>
            </View>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-1'>
          <MDBCol size='12' sm='6' >
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/accueil_equipe.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
          <MDBCol size='12' sm='6' >
            <div className='equipe-expert'>
              <h1 >Une équipe d'experts en test logiciel</h1>
              <p>Des professionnels passionnés une haute compétence technique, en permanence à l’écoute de leurs clients</p>
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-2'>
          <MDBCol size='12' sm='6'>
            <div className='atous'>
              <h1 className='font-weight mb-3 p-0'>Nos atouts</h1>
              <ul className='itmes-atous'>
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
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/accueil_nosatous.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-3'>
          <MDBCol>
            <div className='qualite'>
              <h1>Qualité de votre SI, nous pouvons vous aider. vous chercher a</h1>
              <Button href='solutions' gradient='blue' className='btn btn-needs z-depth-5'>MELIORER VOS PRATIQUES DE TEST</Button>
              <Button href='solutions' gradient='blue' className='btn btn-needs z-depth-5'>AUTOMATISER VOS TESTS</Button >
              <Button href='solutions' gradient='blue' className='btn btn-needs z-depth-5'>EXTERNALISER VOS TESTS</Button >
              <Button href='solutions' gradient='blue' className='btn btn-needs z-depth-5'>TESTER VOS APPLICATIONS DIGITALES</Button >
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default HomePage
