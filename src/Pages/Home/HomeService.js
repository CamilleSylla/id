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
                <div className="card">
                    <p>01</p>
                    <h1>Conception de site internet</h1>
                </div>
                <div className="card">
                    <p>02</p>
                    <h1>Creation graphique</h1>
                </div>
                <div className="card">
                    <p>03</p>
                    <h1>assitance bureautique</h1>
                </div>
            </div>
            </div>
            
            <div className="home-img">

            </div>
        </div>
    )
}