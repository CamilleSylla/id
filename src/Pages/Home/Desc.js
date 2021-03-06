import React from 'react';
import { Link } from 'react-router-dom';


export default function Desc() {

    return (

        <div className="desc">
            <div className="descIll">
                <div className="descLayer"></div>
            </div>
            <div className="descTxt">
                <div className="descTitles">
                    <h3>_   Nos Secteurs</h3>
                    <p>Développement Web, WebDesign, Graphisme...
                    </p>
                </div>
                <p className="descDesc">
                    IconicDev vous propose de vous accompagner
                    dans la création de votre image digitale.
                    Notre expertise dans le domaine
                    du numérique vous assure un contenu personnalisé dans les trends actuels.<br /><br />
                    N'attendez plus pour vous brancher au futur.
                </p>
                <Link to="/services/vitrine" style={{ textDecoration: "none" }}  >
                    <div className="descBtn" >
                        <h2>Me Connecter</h2>
                    </div>
                </Link>
            </div>
        </div>
    )
}