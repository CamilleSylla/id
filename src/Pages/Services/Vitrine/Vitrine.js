import React from 'react';


import './Vitrine.css'
import Arrow from '../../../assets/icon/Arrow.svg'
import Check from '../../../assets/icon/checked.svg'
import NavBot from '../NavBot/NavBot'
export default function Vitrine() {

    return (
        <div className="vitrine">
            <div className="vitrine-intro">
                <div className="vitrine-intro-text">
                    <h1>Creation de sites internet vitrines</h1>
                    <p>
                        Faites de votre projet le reflet de votre image tout en vous démarquant sur Internet.
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
            <div className="navigation">
                <NavBot />
            </div>
            <div className="vitrine-desc">
                <div className="vitrine-desc-txt">
                    <p>
                        Prestataire de services, association, commerçant etc... ,
                        votre image sur Internet doit inspirer confiance à vos
                        partenaires et clients sur la qualité de votre activité.
                        Nous concevons des sites Internet étudiés afin que l'interface
                        utilisateur et son expérience soient modernes et attractives.
                        Le but étant de faire de votre projet un atout majeur dans votre
                        stratégie de communication digitale.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">

                            <h5>
                                Ne tombez pas dans le banal. Soyer unique !
                                 </h5>
                            <p>
                                Le meilleur moyen d'ancrer les esprits est d'être unique et original.
                                Nous vous aiderons à le devenir et à sortir de la masse en respectant les standards et tendances du web.
                                Nos conceptions seront toujours orientées vers un style épuré et professionnel afin de captiver l'utilisateur.
                                       </p>
                            <h5>
                                Utilisable sur tout support
                                 </h5>
                            <p>
                                Lors du développement de votre site, l'adaptation aux différents formats d'écran sera une des priorités
                                afin qu'il soit complètement responsive et adapté à n'importe quel support
                                       </p>
                            <h5>
                                Temps de chargement presque inexistant
                                 </h5>
                            <p>
                                Aujourd'hui (même si google n'a jamais officiellement donné la recette du SEO)
                                le temps de chargement des pages compte énormément dans le référencement de votre site.
                                Nous vous garantissons un site vitrine avec un temps de chargement proche de zéro.
                                Cela vous permettra de surpasser les sites de vos concurrents. Naviguez sur notre site internet vous en aurez la preuve.
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
                                Conception et optimisation du referencement
                                 </h5>
                            <p>
                                Un site internet doit respecter certaines règles pour pouvoir être
                                sur la première page de votre recherche google. Nous mettrons tous
                                en oeuvre pour respecter ces règles. Cependant n'oubliez pas que le référencement se fait aussi et
                                même majoritairement en dehors de votre site... Nous vous communiquerons
                                nos conseils pour faire connaître votre projet.
                                </p>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Temps de chargement raccourci</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Un site adapté à tout écran</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Un design et une ergonimie moderne</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Une etude de référencement poussée</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }} />
                                    <p>Renforcer votre image de marque</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}