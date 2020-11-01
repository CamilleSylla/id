import React from 'react';

import Arrow from '../../../assets/icon/Arrow.svg'
import Check from '../../../assets/icon/checked.svg'
import Sign from '../../../assets/icon/IconicDevSign.svg';
import './Complexe.css'
import NavBot from '../NavBot/NavBot';

export default function Comp() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                <div className="ecom-intro-logo">
                        <img src={Sign} alt="arrow" className="idlog"/>
                    </div>
                    <h1>donnez naissance a vos idees</h1>
                    <p>
                        Votre projet est porteur mais réalisable uniquement sur mesure ? Pas de problème.
                    </p>
                    <div className="ecom-intro-icon">
                    <a href="#desc2"><img src={Arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className="comp-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <NavBot />
            <div className="ecom-desc">
                <div className="ecom-desc-txt" id="desc2">
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
                                Nous avons toutes les compétences nécessaires pour donner à votre projet la forme que vous avez imaginée.
                                Nous mettrons tout en oeuvre pour satisfaire votre demande. N'oubliez pas d'établir un cahier des charges :) ...
                                       </p>
                            <h5>
                                WebDesign tendance et ergonomie intuitive
                                 </h5>
                            <p>
                                Rien de pire qu'un site internet avec une ergonomie non travaillé.
                                Car garder les utilisateurs le plus longtemps sur
                                votre site, nous tient à coeur. Nous mettrons en place pour
                                vous une ergonomie et un design attractifs et professionnels pour
                                l'utilisateur en mettant l'accent sur votre activité.
                                       </p>
                            <h5>
                                Etudes de la concurrence pour une optimisation du referencement
                                 </h5>
                            <p>
                                Nous étudierons votre marché pour mieux nous positionner sur celui-ci. Les codes de votre
                                domaine d'activité seront pris en compte afin de paraître le plus crédible auprès de votre cible.
                                       </p>
                            <h5>
                                Anticipation des futures evolutions
                                 </h5>
                            <p>
                                Ce type de projet est bien souvent susceptible d'évoluer en fonction des retours utilisateurs.
                                Une structure adaptée à une évolution rapide sera donc établie dès les premières lignes de code.
                                       </p>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  />
                                    <p>Adaptation complète</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  />
                                    <p>Étude des meilleures solutions pour votre projet</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  />
                                    <p>Un design et une ergonimie moderne</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  />
                                    <p>Accompagnement après livraison</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  />
                                    <p>Performances optimisées</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}