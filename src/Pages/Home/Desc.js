import React from 'react';

import './Desc.css'

export default function Desc() {

    return (

        <div className="desc">
            <div className="descIll">
                <div className="descLayer"></div>
            </div>
            <div className="descTxt">
                <div className="descTitles">
                    <h3>_   Nos Secteurs</h3>
                    <p>Conception de site internet,
                    Creation graphique, assistance
                    bureautique...
                    </p>
                </div>
                <p className="descDesc">
                    IconicDev vous propose de vous accompagner
                    dans la création de votre image digital.
                    Notre expertise dans le domaine
                    du numérique vous assure un contenue dans les
                    trends actuelles ainsi que personnifier.<br /><br />
                    N'attendez plus pour vous brancher au futur.
                </p>
                <div className="descBtn">
                    <h2>Me Connecter</h2>
                </div>
            </div>
        </div>
    )
}