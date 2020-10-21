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
                    Pour les porteurs de projets avec un concept réalisable uniquement sur-mesure. 
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
                        Le site e-commerce doit posséder une ergonomie suffisante
                        pour permettre aux utilisateurs de trouver rapidement les
                        produits qu'ils recherchent ainsi qu'un design sobre et
                        professionnel afin de les rassurer sur la qualité des
                        services. De plus, la priorité doit être portée sur le
                        référencement des produits, les modes de paiement et de
                        livraison et la création de fonctionnalités innovantes.
                        Ainsi une solution sur-mesure sera toujours plus
                        pertinente qu'un CMS comme Shopify, Prestashop ou Magento.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">

                            <h5>
                                Les sites e-commerces connus sont tous réalisés sur mesure
                                 </h5>
                            <p>
                                Les leaders de la vente en ligne dans tous les secteurs ont
                                développé leurs boutiques en ligne sur-mesure et n'utilisent
                                pas de CMS. Nous conseillons à nos clients de démarrer leur
                                projet sur une base technique sur-mesure moderne, adaptive,
                                évolutive et ergonomique pour ne pas être bloqué par la
                                rigidité des solutions "pré-fabriquées" qui finiront surement
                                par ne plus répondre aux besoins de votre activité.
                                       </p>
                            <h5>
                                Nous développons votre site e-commerce autour de vos produits
                                 </h5>
                            <p>
                                Dès la conception, nous réfléchissons aux solutions les plus
                                adaptées pour vendre vos produits de la meilleure des manières.
                                Pour chaque type de marchandise, il existe des pré-requis de
                                mise en forme, d'ergonomie et des fonctionnalités indispensables différentes.
                                       </p>
                            <h5>
                                Un système de recherche, de tris et de filtres efficace
                                 </h5>
                            <p>
                                Le système de recherche d'un site e-commerce est l'une des
                                composantes essentielles à sa réussite. Vos utilisateurs
                                pourront rechercher, filtrer et trier rapidement vos
                                produits afin de trouver en quelques clics ce qu'ils recherchent.
                                       </p>
                            <h5>
                                Des modes de paiement et de livraison sur-mesure
                                 </h5>
                            <p>
                                Le développement sur-mesure de votre site e-commerce
                                permettra l'ajout de n'importe quel mode de paiement
                                et de livraison permettant ainsi de proposer un large
                                choix d'options de livraison et de paiement pour vos utilisateurs.
                                       </p>
                            <h5>
                                Un référencement sur-mesure et optimisé pour vos produits
                                 </h5>
                            <p>
                                Le développement sur-mesure permet d'avoir un contrôle total
                                sur la forme de votre référencement. Nous choisirons ensemble
                                la forme de vos urls, de vos titres, de vos descriptions; le
                                contenu à mettre en avant et tout ce qui touche à l'image de
                                votre site e-commerce dans les résultats des moteurs de recherche.
                                Nous mettrons en avant vos produits dans les résultats de recherche
                                grâce aux données structurées de Google. Nous avons acquis de nombreuses
                                techniques durant le développement de nos projets e-commerce que nous
                                mettrons à votre disposition.
                                </p>
                        </div>

                    </div>
                    <div className="bref">

                        <div className="bref-item">
                            <img src={Check} alt="checked" />
                            <p>Mettre en avant vos produits.</p>
                        </div>
                        <div className="bref-item">
                            <img src={Check} alt="checked" />
                            <p> Optimisé pour vos produits.</p>
                        </div>
                        <div className="bref-item">
                            <img src={Check} alt="checked" />
                            <p>Filtre performant.</p>
                        </div>
                        <div className="bref-item">
                            <img src={Check} alt="checked" />
                            <p> Paiement securisé.</p>
                        </div>
                        <div className="bref-item">
                            <img src={Check} alt="checked" />
                            <p>Cohérence graphique.</p>
                        </div>
                    </div>
                </div>

            </div>
            <NavBot />
        </div>
    )
}