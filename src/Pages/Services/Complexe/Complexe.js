import React from 'react';

import Arrow from '../../../assets/icon/g6.png'
import Check from '../../../assets/icon/checked.svg'
import NavBot from '../NavBot/NavBot';

import './Complexe.css'

export default function Comp() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                    <h1>donner naissances a vos idees</h1>
                    <p>
                        Votre projet est porteur mais réalisable uniquement sur mesure ? Pas de probleme
                    </p>
                    <div className="ecom-intro-icon">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="comp-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <div className="ecom-desc">
                <div className="ecom-desc-txt">
                    <p>
                        Cela fait un moment que vous voulez concevoir le projet de vos rêves.
                        Nous mettrons à votre disposition nos meilleurs experts afin de donner vie à votre projet.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">

                            <h5>
                                Une solution pour tout projet
                                 </h5>
                            <p>
                                Nous et nos partenaires ont toutes les compétences nécessaires pour donner à votre projet la forme que vous avez imaginé.
                                Nous mettrons tout en oeuvre pour satisfaire votre demande. N'oubliez pas d'établir un cahier des charges :) ...
                                       </p>
                            <h5>
                                WebDesign tendance et ergonomie intuitive
                                 </h5>
                            <p>
                                Rien de pire qu'un site internet avec une ergonomie non travaillé.
                                Car garder les utilisateurs de votre site le plus longtemps sur
                                votre site, nous tient à coeur, nous mettrons en place pour
                                vous une ergonomie et un design attractif et professionnel pour
                                l'utilisateur en mettant l'accent sur votre activité
                                       </p>
                            <h5>
                                Etudes de la concurrence pour une optimisation du referencement
                                 </h5>
                            <p>
                                Nous étudierons votre marché pour mieux nous positionner sur le celui-ci. Les codes de votre
                                domaine d'activité seront pris en compte afin de paraître le plus crédible auprès de votre cible.
                                       </p>
                            <h5>
                                Anticipation des futurs evolutions
                                 </h5>
                            <p>
                                Ce type de projet est bien souvent susceptible d'évoluer en fonction des retours utilisateurs.
                                Une structure adaptée à une évolution rapide sera donc établie dès les premières lignes de code
                                       </p>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Temps de chargement raccourcis</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Une vitrine adapter à tout écran</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Un design et une ergonimie moderne</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Une etudes de réferencement poussé</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Renforcera votre image de marque</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}