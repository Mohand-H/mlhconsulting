import React, { Component } from "react"
import { MDBRow, img, Button, MDBContainer, MDBCol } from "mdbreact"

import "./Home.css"



class HomePage extends Component {
  render() {
    return (


      <div className="container-fluid">

        <MDBRow>
          <MDBCol className="image-bg">
            <h1 className='header'>MLH Consulting</h1>
            <p className='header'> Société de conseil et réalisation, nous mettons l’IT au service de votre métier. Notre objectif : comprendre vos challenges pour vous accompagner au cœur des mutations technologiques.</p>
            <h2 className='header'>Tests logiciels et qualité du SI</h2>
            <Button href='contact' color="primary" className='btn-contact' rounded>Contactez-nous</Button>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol size='12' sm='6' className="image">
            <div className='image-expert'>
              <img src="./pictures/accueil_equipe.jpg" classeName="home-equipe" alt="Responsive image" respensive />
            </div>
          </MDBCol>
          <MDBCol size='12' sm='6' className="equipe-expert">
            <div className="expert">
              <h1>Une équipe d'experts en test</h1>
              <p>Des professionnels passionnés une haute compétence technique, en permanence à l’écoute de leurs clients</p>
            </div>
          </MDBCol>
        </MDBRow>


        <MDBRow>
          <MDBCol size='12' sm='6'>
            <h1>Nos atouts</h1>
            <div className="atous">

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
          </MDBCol>
          <MDBCol size='6' sm='6'>
            <div className='atous'>
              <img src="./pictures/accueil_nosatous.jpg" className="atous-image" />
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol>
            <h1 className='qualite'>Qualité de votre SI, nous pouvons vous aider. vous chercher a</h1>
            <div>
              <Button href="solutions" color="primary" className="btn btn-needs">AMELIORER <br></br>VOS PRATIQUES DE TEST</Button>
              <Button href="solutions" color="primary" className="btn btn-needs">AUTOMATISER<br></br> VOS TESTS</Button >
              <Button href="solutions" color="primary" className="btn btn-needs">EXTERNALISER <br></br>VOS TESTS</Button >
              <Button href="solutions" color="primary" className="btn  btn-needs">TESTER <br></br>VOS APPLICATIONS DIGITALES</Button >
            </div>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol >
            <div className="metier">
              <img src="./pictures/accueil_equipe.jpg" class='equipe' />
            </div>
          </MDBCol>
          <MDBCol className="equipe-expert">
            <h1>Notre Métier Votre Carrière</h1>
          </MDBCol>
        </MDBRow>
      </div>


    )
  }
}

export default HomePage
