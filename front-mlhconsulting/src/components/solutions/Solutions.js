import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, Button} from 'mdbreact'
import './Solutions.css'
import LesExigences from './modals/LesExigences.js'
import Grilles from './modals/Grilles.js'
import Cartographie from './modals/Cartographie.js'
import ConceptionPre from './modals/ConceptionPre.js'
import CampagneDeTest from './modals/CampagneDeTest.js'
import Execution from './modals/Execution.js'
import Traçabilite from './modals/Traçabilite.js'
import GestionDesAnomalies from './modals/GestionDesAnomalies.js'



class Solutions extends Component {
    render() {
        return (
            <div>
                <MDBRow>
                    <MDBCol>
                        <img src='./pictures/nossolutios_batirvotrestrategie.jpg' className="img-fluid" alt="Responsive image" />
                    </MDBCol>
                    <MDBCol>
                        <h1>Bâtir votre stratégie</h1>
                        <p>Pour vos besoins de conseil en ingénierie de test, MLH Consulting vous propose de bénéficier de ses 20 ans d’expériences dans le métier de test logiciel, au travers des offres suivantes :</p>
                        <ul>
                            <li>TestAudit®</li>
                        </ul>
                        <p>Service de conseil (Consulting) visant à dresser un bilan de l’existant en pratique de test logiciel, à mesure le niveau de maturité de ces pratiques (modèles TMMI, TPI Next…), et à proposer un roadmap d’amélioration en cohérence avec les objectifs du client.</p>
                        <ul>
                            <li>TestExpert® conseil</li>
                        </ul>
                        <p>Service de conseil (Consulting) visant à mettre en place les améliorations en organisation/ méthodologie/processus/management d’activités de test, et à accompagner le client pour la conduite du changement.</p>
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <h1>Mettre en place un référentiel de teste</h1>
                        <h2>Maîtriser les coûts et délais des phases de test et recette :</h2>
                        <p>Optimiser la productivité des acteurs;</p>
                        <p>Capitaliser le référentiel de tests ;</p>
                        <p>Disposer de moyens de planification et de suivi des campagnes de test ;</p>
                        <p>Anticiper la préparation à la lecture des Spécifications Fonctionnelles Générales.</p>
                        <h2>Industrialiser les processus de test et recette :</h2>
                        <p>Améliorer la qualité des logiciels par leur qualification ;</p>
                        <p>Homogénéiser les pratiques de tests et recette, et les diffuser;</p>
                        <p>Maîtriser la couverture des exigences ;</p>
                        <p>Mettre à la disposition des acteurs un outil efficace, adapté et accessible;</p>
                        <p>Accompagner la mise en place du référentiel et des pratiques sous-jacentes.</p>
                        <img src='./pictures/nossolutions_mettre_en place_un_ref_de_test.png' className="img-fluid" alt="Responsive image" />
                    </MDBCol>
                    <MDBCol >
                    <LesExigences className='btn-modal'/>
                    <Grilles />
                    <Cartographie />
                    <ConceptionPre />
                    <CampagneDeTest />
                    <Execution />
                    <Traçabilite />
					<GestionDesAnomalies />

                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <h1>Tester vos applications digitales</h1>
                        <p>Au cœur de la stratégie digitale des entreprises, les applications déployées dans le cloud, sur les terminaux mobiles, les objets connectés, et les applications de big data sont en très fort développement, généralement en mode agile (SCRUM, XP ou Développement Lean).</p>
                        <p>Assurer les tests de telles applications nécessite des compétences fonctionnelles M Business, des savoir-faire méthodologiques et technologies particulières.</p>
                        <p>Par exemple, dans le domaine des applications mobiles, les terminaux mobiles et les systèmes d’exploitation (Android, IOS, Windows Phone) cibles des applications sont en évolutions accélérées.</p>
                        <p>Une stratégie de test adaptée, impliquant notamment les terminaux, les systèmes d’exploitation, et les types de réseaux, est impérative pour gérer les besoins croissants en test de ce type d’applications.</p>
                        <ul>
                            <li>Quelle stratégie de test des applications digitales dans mon organisation ?</li>
                            <li>Comment garantir le bon fonctionnement de nos applications mobiles sur les terminaux mobiles de nos clients ?</li>
                            <li>Quelle démarche d’accélératrice pour industrialiser les tests de nos applications digitale ?</li>
                            <li>Comment bénéficier de l’expertise mise à jour et les valeurs d’innovation d’un partenaire en test des applications digitales ?</li>
                        </ul>
                    </MDBCol>
                    <MDBCol>
                        <img src='./pictures/nossolutions_testervosapplications.png' className="img-fluid" alt="Responsive image" />
                    </MDBCol>
                </MDBRow>

                <MDBRow>
                    <MDBCol>
                        <img src='./pictures/nossolutions_automatisationdestests.png' className="img-fluid" alt="Responsive image" />
                    </MDBCol>
                    <MDBCol>
                        <h1>Automatisation des tests</h1>
                        <p>Pour vos besoins en automatisation des tests, s’appuyant sur sa forte expérience dans ce domaine depuis 1995, MLH Consulting vous propose les offres suivantes :</p>
                        <h3>TR2A® (Tierce Recette Applicative Automatisée)</h3>
                        <p>La prise en charge d’automatisation de test d’un projet, d’une application, ou d’un ensemble d’applications (Mainframe, Client/serveur, ERP/CRM/ SCM/PLM/SLM, Webservices, Web X.0, Suites E Business et M Business…) : stratégie d’automatisation de test, conception, paramétrage et développement des « robots logiciels », campagnes de test automatisées.</p>
                        <h3>TestAssist®Automatisation</h3>
                        <p>La mise à disposition des profils de consultants spécialisés en automatisation des test (Chef de projet, Ingénieur Automaticien, Technicien Automatisation…) pour renforcer les équipes clientes dans la prise en charge des activités d’automatisation des testsw</p>
                    </MDBCol>
                </MDBRow>
                </div>
           
        )
    }
}

export default Solutions; 