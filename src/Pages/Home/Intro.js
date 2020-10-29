import React from 'react';
import { Link } from 'react-router-dom';


import './Home.css'
import Sign from '../../assets/icon/IconicDevSign.svg';
export default function Intro({ show }) {

    return (
        <div className="intro-conatainer">
            <div className="home">
                <div className="intro">
                    <img src={Sign} alt="Signature" />
                    <div className="introTxt">
                        <h1>marquez Internet de votre empreinte</h1>
                        <p>Franchissez le cap du digital et envahissez un monde où les limites ne sont qu'imaginaire...</p>
                        <Link to="/services/vitrine" style={{ textDecoration: "none" }}>
                            <div className="servicesBtn">
                                <h2>Services</h2>
                            </div>
                        </Link>
                        <div className="devisBtn" onClick={() => show({ show: true })}>
                            <h2>Devis Gratuit</h2>
                        </div>
                    </div>
                </div>
                <div className="introIll">
                    <div className="introLayer">
                        <h5>.IconicDev</h5>
                    </div>

                </div>
            </div>
        </div>

    )
}