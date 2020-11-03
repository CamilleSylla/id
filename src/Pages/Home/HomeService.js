import React from 'react'


export default function HomeService() {

    return (
        <div className="home-service">
            <div className="home-desc">
                <div className="home-Txt">
                    <div className="home-Titles">
                        <h3>_   Services</h3>
                        <p>Creation de site internet, conception graphique, freelancing...
                    </p>
                    </div>
                </div>
                <div className="cardCont">
                    <div className="card" id="item1">
                        <p className="cardNum">01</p>
                        <h1>Conception de site internet</h1>
                        <p className="cardDesc">
                            Nous créérons votre site internet comme si c’était le nôtre.
                            Nous vous livrerons un site web professionnel
                            avec des fonctionnalités uniques conçues spécialement
                            pour vous et votre projet.
                    </p>
                    </div>
                    <div className="card" id="item2">
                        <p className="cardNum">02</p>
                        <h1>Création graphique</h1>
                        <p className="cardDesc">
                            Le visuel est le premier élément perçu par les clients.
                            Grâce à ses connaissances en design, IconicDev établira
                            pour vous, une charte graphique impactante à votre image.
                    </p>
                    </div>
                    <div className="card" id="item3">
                        <p className="cardNum">03</p>
                        <h1>Freelancing</h1>
                        <p className="cardDesc">
                        Engagez un de nos développeurs pour aider votre équipe de développement à atteindre ses objectifs !

                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}