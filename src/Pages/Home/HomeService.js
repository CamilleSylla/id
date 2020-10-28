import React from 'react'

import './HomeService.css'

export default function HomeService() {

    return (
        <div className="home-service">
            <div className="home-desc">
                <div className="home-Txt">
                    <div className="home-Titles">
                        <h3>_   Services</h3>
                        <p>Develeoppement Web, WebDesign, Graphisme...
                    </p>
                    </div>
                </div>
                <div className="cardCont">
                    <div className="card" id="item1">
                        <p className="cardNum">01</p>
                        <h1>Conception de site internet</h1>
                        <p className="cardDesc">
                            Nous créerons votre site internet comme si c’était le nôtre.
                            Pour vous livrer un site web professionnel
                            avec des fonctionnalités uniques conçut spécialement
                            pour vous et votre projet.
                    </p>
                    </div>
                    <div className="card" id="item2">
                        <p className="cardNum">02</p>
                        <h1>Création graphique</h1>
                        <p className="cardDesc">
                            Le visuel est le premier élément perçu par les clients.
                            Grâce à ses connaissances en design, IconicDev établira
                            pour vous, une charte graphique impactante a votre image.
                    </p>
                    </div>
                    <div className="card" id="item3">
                        <p className="cardNum">03</p>
                        <h1>assitance bureautique</h1>
                        <p className="cardDesc">
                            Simplifier votre quotidien et les taches bureautiques en utilisant les bons outils.
                            IconicDev étudiera vos besoins afin d'optimiser vos taches et donc rentabiliser votre temps.

                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}