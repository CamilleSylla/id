import React from 'react';
import { Link } from 'react-router-dom';

//assets
import FB from '../../assets/icon/fb.svg'
import IG from '../../assets/icon/ig.svg'

import './Footer.css'

export default function Footer({ show }) {

    return (
        <div className="footer">
            <div className="footerInfo">
                <div className="footerTitle">
                    <h4>iconicdev-contact@gmail.com</h4>
                </div>
                <div className="footerAdresse">
                    <p>74B rue du PDT J.F. Kennedy<br />
                    Saint-Quentin, 02100<br />
                    France </p>
                </div>
                <div className="footerSocial">
                    <div>
                        <img
                            src={FB}
                            alt="Facebook"
                            onClick={(e) => (window.open('https://www.facebook.com/IconicDev-102040181691238'))}
                        />
                    </div>
                    <div>
                        <img
                            src={IG}
                            alt="Instagram"
                            onClick={(e) => (window.open('https://www.instagram.com/iconicdev.id/'))}
                        />
                    </div>
                </div>
            </div>
            <div className="bottomMenu">
                <p>
                    <Link to='/'>
                    Accueil
                    </Link>
                    
                </p>
                <p>
                <Link to="/services/vitrine">
                    Services
                    </Link>
                </p>
                <p onClick={() => show({ show: true })}>
                    Contact
                </p>
                <p>
                <Link to='/'>
                    Mentions Légales
                    </Link>
                </p>
                <p className='footerBtn' onClick={() => show({ show: true })}> Devis Gratuit</p>
            </div>
        </div>
    )
}