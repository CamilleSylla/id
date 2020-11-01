import React from 'react';
import Sign from '../../../assets/icon/IconicDevSign.svg';
import Arrow from '../../../assets/icon/Arrow.svg'
import Check from '../../../assets/icon/checked.svg'

import './Graph.css'
import NavBot from '../NavBot/NavBot';

export default function Graph() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                <div className="ecom-intro-logo">
                        <img src={Sign} alt="arrow" className="idlog"/>
                    </div>
                    <h1>Imposez votre style</h1>
                    <p>
                        Démarquez-vous de la concurrence en ayant une identité visuelle à la hauteur de vos ambitions.
                    </p>
                    <div className="ecom-intro-icon">
                    <a href="#desc4"><img src={Arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className="graph-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <NavBot />
            <div className="ecom-desc">
                <div className="ecom-desc-txt" id="desc4">
                    <p>
                        Que ce soit pour attirer l'attention, augmenter la fidélisation mais aussi
                        assurer sa popularité sur et en dehors d'internet, votre identité visuelle
                        sera un facteur important dans la réussite de vos projets. Le consommateur
                        d'aujourd'hui se tourne vers les marques qui
                        lui ressemblent et qui correspondent à ces valeurs. On peut donc en déduire que
                        l'identité visuelle est un acteur majeur de l'image de marque.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">
                            <h5>
                                Une charte graphique comme ligne conductrice
                                 </h5>
                            <p>
                                C'est un élément indispensable dans votre stratégie de communication.
                                Nous nous engageons à concevoir pour vous une charte graphique qui
                                permettra de vous différencier de la concurrence. Nous nous chargerons
                                d'assurer une cohérence des colorimétries, logo, polices, en suivant
                                un style épuré et moderne en fonction de votre secteur d'activité.
                                       </p>
                            <h5>
                                Un logo comme symbole
                                 </h5>
                            <p>

                                Un logo est la pièce maîtresse de votre identité visuelle.
                                Il a un rapport direct avec votre activité ainsi que vos valeurs.
                                Nous concevrons pour vous un logo à la hauteur de vos espérances
                                dans les tendances graphiques actuelles et facilement adaptables.
                                       </p>
                            <h5>
                                Edition de contenu graphique
                                 </h5>
                            <p>
                                Les flyers, cartes de visite ou encore contenus graphiques
                                pour réseaux sociaux peuvent être des facteurs positifs
                                pour faire connaître vos projets et donc, par conséquent, votre
                                marque. Nous confier la conception de ceux-ci vous assurera
                                une cohérence entre les éléments cités précédemment et votre stratégie de communication.
                                       </p>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Design moderne et cohérent.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p> Visuelle inoubliable.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Couleurs impactantes</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Parfait pour vos réseaux</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}