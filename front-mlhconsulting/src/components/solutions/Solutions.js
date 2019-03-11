import React, { Component } from 'react'
import { MDBRow, MDBCol, View, Mask } from 'mdbreact'
import './solutions.css'
import LesExigences from './modals/lesExigences.js'
import Grilles from './modals/grilles.js'
import Cartographie from './modals/cartographie.js'
import ConceptionPre from './modals/conceptionPre.js'
import CampagneDeTest from './modals/campagneDeTest.js'
import Execution from './modals/execution.js'
import Traçabilite from './modals/tracabilite.js'
import GestionDesAnomalies from './modals/gestionDesAnomalies.js'



class Solutions extends Component {

  render() {
    return (
      <div className='container-fluid'>
        <MDBRow className='section-1'>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/nossolutions_batirvotrestrategie.jpg' alt='img-resposive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <h1>Bâtir votre stratégie</h1>
            <p align='justify'> Pour vos besoins de conseil en ingénierie de test, MLH Consulting vous propose de bénéficier de ses 20 ans d’expériences dans le métier de test logiciel, au travers des offres suivantes :</p>
            <ul>
              <li>TestAudit®</li>
            </ul>
            <p className='text-justify'>Service de conseil (Consulting) visant à dresser un bilan de l’existant en pratique de test logiciel, à mesure le niveau de maturité de ces pratiques (modèles TMMI, TPI Next…), et à proposer un roadmap d’amélioration en cohérence avec les objectifs du client.</p>
            <ul>
              <li>TestExpert® conseil</li>
            </ul>
            <p className='text-justify'>Service de conseil (Consulting) visant à mettre en place les améliorations en organisation/ méthodologie/processus/management d’activités de test, et à accompagner le client pour la conduite du changement.</p>
          </MDBCol>
        </MDBRow>
        <MDBRow className='section-2'>
          <MDBCol size='12' sm='6'>
            <h1>Mettre en place un référentiel de teste</h1>
            <h3>Maîtriser les coûts et délais des phases de test et recette :</h3>
            <p>Optimiser la productivité des acteurs;</p>
            <p>Capitaliser le référentiel de tests ;</p>
            <p>Disposer de moyens de planification et de suivi des campagnes de test ;</p>
            <p>Anticiper la préparation à la lecture des Spécifications Fonctionnelles Générales.</p>
            <h3>Industrialiser les processus de test et recette :</h3>
            <p>Améliorer la qualité des logiciels par leur qualification ;</p>
            <p>Homogénéiser les pratiques de tests et recette, et les diffuser;</p>
            <p>Maîtriser la couverture des exigences ;</p>
            <p>Mettre à la disposition des acteurs un outil efficace, adapté et accessible;</p>
            <p>Accompagner la mise en place du référentiel et des pratiques sous-jacentes.</p>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/nossolutions_mettre_en place_un_ref_de_test.png' alt='img-resposive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <LesExigences className='btn-modal' />
            <Grilles />
            <Cartographie />
            <ConceptionPre />
            <CampagneDeTest />
            <Execution />
            <Traçabilite />
            <GestionDesAnomalies />
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-3'>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/nossolutions_testervosapplications.jpg' alt='img-resposive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <h1>Tester vos applications digitales</h1>
            <p className='text-justify'>Au cœur de la stratégie digitale des entreprises, les applications déployées dans le cloud, sur les terminaux mobiles, les objets connectés, et les applications de big data sont en très fort développement, généralement en mode agile (SCRUM, XP ou Développement Lean).</p>
            <p className='text-justify'>Assurer les tests de telles applications nécessite des compétences fonctionnelles M Business, des savoir-faire méthodologiques et technologies particulières.</p>
            <p className='text-justify'>Par exemple, dans le domaine des applications mobiles, les terminaux mobiles et les systèmes d’exploitation (Android, IOS, Windows Phone) cibles des applications sont en évolutions accélérées.</p>
            <p className='text-justify'>Une stratégie de test adaptée, impliquant notamment les terminaux, les systèmes d’exploitation, et les types de réseaux, est impérative pour gérer les besoins croissants en test de ce type d’applications.</p>
            <ul>
              <li>Quelle stratégie de test des applications digitales dans mon organisation ?</li>
              <li>Comment garantir le bon fonctionnement de nos applications mobiles sur les terminaux mobiles de nos clients ?</li>
              <li>Quelle démarche d’accélératrice pour industrialiser les tests de nos applications digitale ?</li>
              <li>Comment bénéficier de l’expertise mise à jour et les valeurs d’innovation d’un partenaire en test des applications digitales ?</li>
            </ul>
          </MDBCol>
        </MDBRow>

        <MDBRow className='section-4'>
          <MDBCol size='12' sm='6'>
            <h1>Automatisation des tests</h1>
            <p className='text-justify'>Pour vos besoins en automatisation des tests, s’appuyant sur sa forte expérience dans ce domaine depuis 1995, MLH Consulting vous propose les offres suivantes :</p>
            <h3>TR2A® (Tierce Recette Applicative Automatisée)</h3>
            <p className='text-justify'>La prise en charge d’automatisation de test d’un projet, d’une application, ou d’un ensemble d’applications (Mainframe, Client/serveur, ERP/CRM/ SCM/PLM/SLM, Webservices, Web X.0, Suites E Business et M Business…) : stratégie d’automatisation de test, conception, paramétrage et développement des « robots logiciels », campagnes de test automatisées.</p>
            <h3>TestAssist®Automatisation</h3>
            <p className='text-justify'>La mise à disposition des profils de consultants spécialisés en automatisation des test (Chef de projet, Ingénieur Automaticien, Technicien Automatisation…) pour renforcer les équipes clientes dans la prise en charge des activités d’automatisation des testsw</p>
          </MDBCol>
          <MDBCol size='12' sm='6'>
            <View className='rounded z-depth-2 mb-lg-0 mb-4' hover waves>
              <img className='img-fluid' src='./pictures/nossolutions_automatisationdestests.png' alt='img-resposive' />
              <Mask overlay='white-slight' />
            </View>
          </MDBCol>
        </MDBRow>
      </div>
    )
  }
}

export default Solutions; 