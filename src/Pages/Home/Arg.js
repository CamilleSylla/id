import React from 'react';

import './Arg.css';

export default function Arg() {

    return (
        <div className="arg">
            <p className="argTitle">L'ensemble de notre savoir a votre disposition.</p>
            <p className="argQuote"> Profitez aussi de nos conseils en stratégie, communication digital et référencement. </p>
            <div className="argGrid">
                <div>
                    <h5>Adapter</h5>
                    <p>Nous trouverons toujours une solution avantageuse</p>
                </div>
                <div>
                    <h5>Optimiser</h5>
                    <p>Le contenue que nous proposont est performant en tout point</p>
                </div>
                <div>
                    <h5>Lignes de codes</h5>
                    <p>Des crampes aux doigts mais votre satifaction les soignents</p>
                </div>
            </div>
        </div>
    )
}