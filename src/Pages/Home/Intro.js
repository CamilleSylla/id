import React from 'react';
import { Link } from 'react-router-dom';

export default function Intro () {

    return (

        <div className="home">
            <div className="intro">
                <div className="introTxt">
                    <h1>votre solution web adapter a votre besoin</h1>
                    <p>Franchissez le cap du digital et envahissez 
                        un monde ou les limites ne sont qu'imaginaire...
                    </p>
                    <Link to="/services/vitrine" style={{textDecoration: "none"}}>
                    <div className="servicesBtn">
                        <h2>Services</h2>
                    </div>
                    </Link>
                    <div className="devisBtn">
                        <h2>Devis Gratuit</h2>
                    </div>
                </div>
            </div>
            <div className="introIll">
                <div className="introLayer">
                        
                </div>
                <h5>.Build</h5>
            </div>
        </div>
    )
}