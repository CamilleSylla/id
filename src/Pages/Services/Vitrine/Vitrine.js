import React from 'react';


import './Vitrine.css'


import Arrow from '../../../assets/icon/g6.png'
import Check from '../../../assets/icon/checked.svg'
import NavBot from '../NavBot/NavBot';

export default function Vitrine() {

    return (
        <div className="vitrine">
            <div className="vitrine-intro">
                <div className="vitrine-intro-text">
                    <h1>Creation de sites internet vitrines</h1>
                    <p>
                        Pour se démarquer sur internet et faire
                        de votre projet une entité unique.
                    </p>
                    <div className="vitrine-intro-icon">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="vitrine-intro-img">
                    <div className="vitrine-intro-layer">
                    </div>
                </div>
            </div>
            <div className="vitrine-desc">
                <div className="vitrine-desc-txt">
                    <p>
                        Que vous soyez un prestataire de service ou un commerçant,
                        l’image de votre société sur internet doit permettre à vos
                        clients et partenaires d’être rassurés et confiants sur la
                        qualité de vos produits et prestations. C’est dans cet
                        esprit que nous conçevons des chartes graphiques modernes
                        et attractives possédant une ergonomie travaillée pour que
                        nos sites internet vitrines soient des atouts majeurs pour
                        nos clients.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">
                            
                            <h5>
                                Ne laissez pas votre marque ressembler a celle
                                de vos concurrents
                                 </h5>
                            <p>
                                Afin de marquer les mémoires nous essayons
                                toujours de proposer quelque chose d’unique,
                                d'original et de pertinent tout en respectant
                                les standards du web et les tendances
                                graphiques. Nos souhaitons toujours fournir
                                un site vitrine au style épuré,
                                professionnel, ergonomique et avec une très
                                forte valeur ajoutée.
                                       </p>
                            <h5>
                                Disponible sur tous les supports fixes ou mobiles
                                 </h5>
                            <p>
                                Une des priorités durant le développement de nos
                                sites internet vitrines, est qu'ils soient entièrement
                                responsive et adaptés à tous les supports existants
                                (ordinateurs, tablettes, phablettes et mobiles).
                                       </p>
                            <h5>
                                Un site internet Vitrine avec moins de chargement
                                 </h5>
                            <p>
                                Grâce à nos compétences dans les
                                dernières technologies web nous garantissons des temps
                                d’affichage proche de zéro pour toutes les pages de votre
                                site internet vitrine. Cela a une influence direct sur
                                l’amélioration du référencement de votre site internet
                                et vous permettra de surpasser très largement les temps
                                d’affichage des sites concurrents. Nous vous invitons à naviguer sur notre site internet
                                afin de vous rendre compte par vous-même de la vitesse
                                d'affichage de nos pages web.
                                       </p>
                            <h5>
                                Un web design et une ergonomie professionnel
                                 </h5>
                            <p>
                                Nos compétences en web design et en expériences
                                utilisateurs nous permettent de produire un site
                                internet vitrine facile à utiliser et à comprendre.
                                Nous avons à coeur de créer une interface simple,
                                intuitive et agréable à utiliser, qui met l'accent sur
                                les informations importantes de votre activité.
                                       </p>
                            <h5>
                                Un site internet vitrine concu pour le referencement
                                 </h5>
                            <p>
                                Le but de tout site internet est d'être trouvé dans les
                                résultats de recherche. Ainsi, nous optimisons la
                                structure sémantique de votre projet afin qu'il
                                respecte au mieux les règles en la matière.
                                Car le référencement se passe aussi et surtout
                                en dehors de votre site internet, nous mettons
                                à disposition nos conseils et nos idées pour faire
                                connaitre votre projet.
                                </p>
                        </div>

                    </div>
                    <div className="bref">
                        
                        <div className="bref-item">
                        <img src={Check} alt="checked"/>
                            <p>Temps de chargement raccourcis</p>
                        </div>
                        <div className="bref-item">
                        <img src={Check} alt="checked"/>
                            <p>Une vitrine adapter à tout écran</p>
                        </div>
                        <div className="bref-item">
                        <img src={Check} alt="checked"/>
                            <p>Un design et une ergonimie moderne</p>
                        </div>
                        <div className="bref-item">
                        <img src={Check} alt="checked"/>
                            <p>Une etudes de réferencement poussé</p>
                        </div>
                        <div className="bref-item">
                        <img src={Check} alt="checked"/>
                            <p>Renforcera votre image de marque</p>
                        </div>
                    </div>
                </div>

            </div>
            <NavBot/>
        </div>
    )
}