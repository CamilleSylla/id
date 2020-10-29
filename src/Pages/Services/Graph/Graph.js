import React from 'react';

import Arrow from '../../../assets/icon/g6.png'
import Check from '../../../assets/icon/checked.svg'

import './Graph.css'

export default function Graph() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                    <h1>Imposer votre style</h1>
                    <p>
                        Démarquer vous de la concurrence en ayant une identité visuelle à la hauteur de vos ambitions
                    </p>
                    <div className="ecom-intro-icon">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="graph-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <div className="ecom-desc">
                <div className="ecom-desc-txt">
                    <p>
                        Que ce soit pour attirer l'attention, augmenter la fidélisation mais aussi
                        assurer sa popularité sûre et en dehors d'internet, votre identité visuelle
                        sera un facteur important dans la réussite de vos projets. Le consommateur
                        d'aujourd'hui se tourne vers les marques qui
                        lui ressemble et qui correspondent à ses valeurs. On peut donc en déduire que
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
                                d'assurer une cohérence des coleriemetries, logo, polices, en suivant
                                un style épuré et moderne en fonction de votre secteur d'activité.
                                       </p>
                            <h5>
                                Un logo comme symbole
                                 </h5>
                            <p>

                                Un logo est la pièce maitresse de votre identité visuelle
                                il a un rapport direct avec votre activité ainsi que vos valeurs
                                . Nous concevrons pour vous un logo a la hauteur de vos espérances
                                dans les tendances graphiques actuelles et facilement adaptables.
                                       </p>
                            <h5>
                                Edition de contenue graphique
                                 </h5>
                            <p>
                                Les flyers, Carte de Visite ou encore contenue graphique
                                pour réseaux sociaux peuvent être des facteurs positifs
                                pour faire connaitre vos projets et donc par conséquent votre
                                marque. Nous confier la conception de ceux-ci vous assurera
                                une cohérence avec entre les éléments cités précédemment et votre stratégie communication.
                                       </p>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Mettre en avant vos produits.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p> Optimisé pour vos produits.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Filtre performant.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p> Paiement securisé.</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Cohérence graphique.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}