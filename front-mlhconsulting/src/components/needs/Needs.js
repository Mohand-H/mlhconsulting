import React, { Component } from 'react'
import { MDBRow, MDBCol, View, Mask } from 'mdbreact'
import './Needs.css'



class Needs extends Component {



  render() {
    return (
      <div className='container-fluid'>
        <MDBRow className='section-1'>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/vosbesoins_ameliorervos_pratique_de_test.jpg' alt='img-responsive' />
             <Mask overlay='white-slight' />
            </View>
          </MDBCol>

          <MDBCol size='12' sm='6'>
            <h1>Améliorer vos pratique de Test</h1>
            <p className='text-justify'>Avec l’amplification des rythmes d’évolution des systèmes d’information, les besoins de test logiciel augmentent en volume et se complexifient de plus en plus : tests unitaire, test d’intégration, qualification et recette, test agile, test de non-régression, test des web services, test des applications mobiles, test transverse inter-applicatif… Afin de faire face à cette complexité croissante, les entreprises doivent s’organiser en conséquence et adopter des méthodes, les processus et les outils de test pour rationaliser, professionnaliser et industrialiser leurs activités de test.</p>

            <h1>Quelle stratégie adopter ? </h1>
            <p className='text-justify'>Quel niveau de maturité de notre organisation en matière de test logiciel par rapport à l’état de l’art du marché ?
              Quelle stratégie de test global pour mieux intégrer les méthodes de développement agile dans notre contexte ?
              Quelle organisation adaptée aux activités de test logiciel à mettre en œuvre?
              Quels profils et quelles compétences indispensables pour construire nos équipes de test ?
              Quelles méthodes, processus et outils de test à mettre en œuvre pour rendre nos équipes de test encore plus efficaces ?
              Quelles sont les offres du marché en termes d’outils ? Comment formaliser et dimensionner mes besoins ?</p>
          </MDBCol>
        </MDBRow>


        <MDBRow className='section-2'>
          <MDBCol size='12' sm='6'>
            <h1>Automatiser vos tests</h1>
            <p className='text-justify'>Durant le processus d’évolution d’un système d’information, le volume de test à faire de chaque release augmente au fil du temps.
              De plus, l’intégration des technologies numériques dans le SI existant se fait généralement avec une méthode de développement agile, qui accélère le rythme des livraisons des releases.
              Dans un tel contexte, afin de garantir la qualité du SI, il est devient impératif d’automatiser les tests de non-régression, et de raccourcir ainsi considérablement le cycle de test.
              Il est constaté qu’une campagne de tests automatisés est 8 à 10 fois plus rapide que le déroulement manuel des mêmes tests.</p>
            <ul>
              <li>Automatiser les tests consiste à paramétrer et développer, à l’aide d’outils comme HP ALM et HP UFT, des robots logiciels de test dans le contexte de l’application. Ces « robots logiciels » peuvent être ensuite exploités pour effectuer des campagnes de test automatisées.</li>
              <li>Ces activités d’automatisation représentent un investissement dont l’étude préalable de ROI est recommandée. Tous les tests ne méritent pas d’être automatisés.</li>
              <li>La stratégie de test d’automatisation est un élément primordial pour la réussite des projets d’automatisation. Elle permet notamment de déterminer ce qui est à automatiser, avec quels moyens et à quel moment du projet.</li>
              <li>L’automatisation nécessite une approche de conception modulaire des composants tests, afin de réduire au maximum le coût de la maintenance des « robots logiciels » de test de non-régression.</li>
              <li>L’automatisation des tests des applications nécessite des outils adaptés selon la ou les technologies intrinsèques des applications à tester. Par exemple, HP UFT – Mobile Center est destiné à l’automatisation des applications mobile sur les terminaux Android, IOS ou Windows Phone, alors que HP UFT possède d’autres extensions (Add-ins) adaptées aux web services et aux différents types de IHM, tels que les navigateurs web, les interfaces des progiciels ERP (SAP, Oracle …), interfaces Mainframe…</li>
            </ul>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/vosbesoins_automatiservostests.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-3'>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/vosbesoins-externaliservostests.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>

          <MDBCol size='12' sm='6'>
            <h1>Externaliser vos tests</h1>
            <p className='text-justify'>Pour les équipes MOA et les équipes de DSI, la prise en charge des activités de test peut représenter une charge importante avec une complexité croissante à gérer au fil du temps.</p>
            <p className='text-justify'>L’externalisation des activités de test peut être envisagée :</p>
            <ul>
              <li>Afin de permettre aux équipes MOA/DSI de se concentrer en priorité sur les activités à plus haute valeur ajoutée (gestion des demandes métiers, planification et spécification de nouvelles fonctionnalités…)</li>
              <li>Pour permettre aux équipes MOA/DSI de se libérer des activités de construction et d’exploitation des patrimoines de test, ou pour disposer rapidement des professionnels de test motivés et immédiatement opérationnels, sans pour autant investir en interne sur des ressources spécialisées en test.</li>
            </ul>
            <p className='text-justify'>Découvrez nos solutions Tierce recette Applicative</p>
            <ul>
              <li>Quels sont les pré-requis et les contraintes d’externalisation des tests ?</li>
              <li>Quelle stratégie d’externalisation des tests est le mieux adaptée à mon organisation ?</li>
              <li>Quelle forme d’externalisation des tests ?</li>
              <li>Comment bénéficier de l’expertise mise à jour et les valeurs d’innovation d’un partenaire de l’externalisation ?</li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-4'>
          <MDBCol size='12' sm='6'>
            <h1>Tester vos applications digitales</h1>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/vosbesoins-tester_vos_app.jpg' alt='img-responsive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}


export default Needs 