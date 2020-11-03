import React from 'react';

import Arrow from '../../../assets/icon/Arrow.svg';
import Check from '../../../assets/icon/checked.svg';

import Html from '../../../assets/img/icons/html-5.svg';
import Css from '../../../assets/img/icons/css.svg';
import Js from '../../../assets/img/icons/javascript.svg';
import Wp from '../../../assets/img/icons/wordpress.svg';
import ReactJs from '../../../assets/img/icons/ReactJS.svg';
import Git from '../../../assets/img/icons/github.svg';
import MyAdmin from '../../../assets/img/icons/MyAdmin.svg';
import Webpack from '../../../assets/img/icons/webpack.svg';
import NodeJs from '../../../assets/img/icons/Node.svg';
import Psql from '../../../assets/img/icons/Psql.svg';
import Fire from '../../../assets/img/icons/Fire.svg';
import Sign from '../../../assets/icon/IconicDevSign.svg';

import NavBot from '../NavBot/NavBot';

export default function Supp() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                <div className="ecom-intro-logo">
                        <img src={Sign} alt="arrow" className="idlog"/>
                    </div>
                    <h1>nos connaissances a disposition de votre equipe</h1>
                    <p>
                        Renforcez votre équipe sur vos projet.
                    </p>
                    <div className="ecom-intro-icon">
                    <a href="#desc5"><img src={Arrow} alt="arrow" /></a>
                    </div>
                </div>
                <div className="supp-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <NavBot />
            <div className="ecom-desc">
                <div className="ecom-desc-txt" id="desc5">
                    <p>
                        Vous souhaitez démarrer un projet web, le faire évoluer,
                        avec une équipe que vous composez à 100%. Nos développeurs
                        sont à votre disposition afin de venir renforcer vos équipes
                        et assurer la réussite de vos projets.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">
                            <h5> Nos technologies principales :</h5>
                            <div className="tech">
                                <img src={Html} alt="html"/>
                                <img src={Css} alt="Css"/>
                                <img src={Js} alt="Javascript"/>
                                <img src={ReactJs} alt="ReactJs"/>
                                <img src={Wp} alt="Wordpress"/>
                                <img src={Fire} alt="Firebase"/>
                                <img src={NodeJs} alt="Node.js"/>
                                <img src={Psql} alt="Psql"/>
                                <img src={MyAdmin} alt="phpMyAdmin"/>
                                <img src={Webpack} alt="webpack"/>
                            </div>
                            <h5> Developpeur disponible :</h5>
                            <div className="tech">
                                <div className="tech-cards"
                                    style={{ cursor: 'pointer' }}
                                    onClick={(e) => (window.open('https://github.com/CamilleSylla'))}>
                                    <img src={Git} />
                                    <h1> Camille Sylla</h1>
                                </div>
                                <div className="tech-cards"
                                    style={{ cursor: 'pointer' }}
                                    onClick={(e) => (window.open('https://github.com/malaprince11'))}>
                                    <img src={Git} />
                                    <h1> Malahmine Bah</h1>
                                </div>
                            </div>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked" />
                                    <p>Disponible à 100%</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" />
                                    <p>Remote possible</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" />
                                    <p>Relation humaine</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}