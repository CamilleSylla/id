import React from 'react';

import Arrow from '../../../assets/icon/Arrow.svg'
import Check from '../../../assets/icon/checked.svg'

import './Ecom.css'
import NavBot from '../NavBot/NavBot';

export default function Ecom() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                    <h1>Conception de sites e-commerce </h1>
                    <p>
                        Augmentez votre chiffre d'affaires en vous déployant sur le web
                    </p>
                    <div className="ecom-intro-icon">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="ecom-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <NavBot/>
            <div className="ecom-desc">
                <div className="ecom-desc-txt">
                    <p>
                        Un e-commerce doit posséder un design et une ergonomie qui
                        permet aux utilisateurs de trouver rapidement les produits
                        qu'ils cherchent tout en proposant des produits qui pourraient
                        l'intéresser. Des méthodes de paiement sécurisées,
                        mode de livraison, du référencement produit sont des conventions à
                        respecter pour tout site e-commerce.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">

                            <h5>
                                des outils adapter a votre besoin
                                 </h5>
                            <p>
                                Lors de l'étude de votre besoin nous étudierons la solution la plus adaptée à celui-ci.
                                Nous vous conseillerons les techniques et outils de conceptions les plus pertinentes pour votre projet.
                                       </p>
                            <h5>
                                Mettre en avant vos produits
                                 </h5>
                            <p>
                                Comme dit précédemment, nous réfléchissons aux meilleures solutions pour vendre vos produits de la meilleure manière.
                                Chaque secteur d'activité possède ses propres caractéristiques d'ergonomies et fonctionnalités que nous respecterons
                                       </p>
                            <h5>
                                l'utilisateur est roi
                                 </h5>
                            <p>
                                Les filtres d'un site e-commerce performant laisse toujours un bon sentiment dans la tête de son utilisateur
                                c'est pourquoi l'optimisation de celui-ci est très importante lors du développement de votre projet.
                                       </p>
                            <h5>
                                methodes de paiement et livraison celon vos possibilitées
                                 </h5>
                            <p>
                                Un paiement sécurisé est le " B.a.ba " d'un e-commerce. Inspirer
                                la confiance de l'utilisateur est un facteur décisif de notre développement.
                                Des méthodes de livraison adapté à vos capacités seront appliquées lors de la conception du projet
                                       </p>
                            <h5>
                                Conception et optimisation du referencement
                                 </h5>
                            <p>
                                Un site internet doit respecter certaines règles pour pouvoir être
                                sur la première page de votre recherche google. Nous mettrons tous
                                en oeuvres pour respecter ses règles. Cependant n'oubliez pas que le référencement se fait aussi et
                                même majoritairement en dehors de votre site... Nous vous communiquerons
                                nos conseils pour faire connaitre votre projet.
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