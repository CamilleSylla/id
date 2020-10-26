import React from 'react';

//assets
import FB from '../../assets/icon/fb.svg'
import IG from '../../assets/icon/ig.svg'

import './Footer.css'

export default function Footer ({ show }) {

    return (
        <div className="footer">
            <div className="footerInfo">
                <div className="footerTitle">
                    <h4>iconicdev-contact@gmail.com</h4>
                </div>
                <div className="footerAdresse">
                    <p>74B rue du PDT J.F. Kennedy<br/>
                    Saint-Quentin, 02100<br/>
                    France </p>
                </div>
                <div className="footerSocial">
                    <div>
                        <img src={FB} alt="Facebook"/>
                    </div>
                    <div>
                        <img src={IG} alt="Instagram"/>
                    </div>
                </div>
            </div>
            <div className="bottomMenu">
                <p>
                    Accueil
                </p>
                <p>
                    Services
                </p>
                <p>
                    Contact
                </p>
                <p>
                    Mentions Légales
                </p>
                <p className='footerBtn' onClick={ () => show({show: true})}> Devis Gratuit</p>
            </div>
        </div>
    )
}