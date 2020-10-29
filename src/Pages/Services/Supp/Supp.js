import React from 'react';

import Arrow from '../../../assets/icon/g6.png'
import Check from '../../../assets/icon/checked.svg'

import Html from '../../../assets/img/icons/html-5.svg'
import Css from '../../../assets/img/icons/css.svg'
import Js from '../../../assets/img/icons/javascript.svg'
import Wp from '../../../assets/img/icons/wordpress.svg'
import ReactJs from '../../../assets/img/icons/ReactJS.svg'
import Git from '../../../assets/img/icons/github.svg'
import MyAdmin from '../../../assets/img/icons/MyAdmin.svg'
import Elementor from '../../../assets/img/icons/elementor.svg'
import Webpack from '../../../assets/img/icons/webpack.svg'
import NodeJs from '../../../assets/img/icons/Node.svg'
import Psql from '../../../assets/img/icons/Psql.svg'
import Fire from '../../../assets/img/icons/Fire.svg'

import './Supp.css'

export default function Supp() {

    return (
        <div className="ecom">
            <div className="ecom-intro">
                <div className="ecom-intro-text">
                    <h1>nos connaissances a disposition de votre equipe</h1>
                    <p>
                        Renforcer votre équipe sur votre projet
                    </p>
                    <div className="ecom-intro-icon">
                        <img src={Arrow} alt="arrow" />
                    </div>
                </div>
                <div className="supp-intro-img">
                    <div className="ecom-intro-layer">
                    </div>
                </div>
            </div>
            <div className="ecom-desc">
                <div className="ecom-desc-txt">
                    <p>
                        Vous souhaitez démarrer un projet web, le faire évoluer,
                        avec une équipe que vous composer à 100%. Nos développeurs
                        sont à votre disposition afin de venir renforcer vos équipes
                        et assurer la réussite de vos projets.
                           </p>
                    <div className="argumentsGrid">
                        <div className="arguments">
                            <h5> Nos technologies principales :</h5>
                            <div className="tech">
                                <img src={Html}/>
                                <img src={Css}/>
                                <img src={Js}/>
                                <img src={ReactJs}/>
                                <img src={Wp}/>
                                <img src={Fire}/>
                                <img src={NodeJs}/>
                                <img src={Psql}/>
                                <img src={MyAdmin}/>
                                <img src={Webpack}/>
                            </div>
                            <h5> inspecter notre code :</h5>
                            <div className="tech">
                                <div className="tech-cards">
                                <img src={Git}/>
                                <h1> Camille Sylla</h1>
                                </div>
                                <div className="tech-cards">
                                <img src={Git}/>
                                <h1> Malahmine Ba</h1>
                                </div>
                            </div>
                        </div>
                        <div className="techno">
                            <div className="techno-grid">
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  style={{ width: "15%" }}/>
                                    <p>Temps de chargement raccourcis</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  style={{ width: "15%" }}/>
                                    <p>Une vitrine adapter à tout écran</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  style={{ width: "15%" }}/>
                                    <p>Un design et une ergonimie moderne</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked"  style={{ width: "15%" }}/>
                                    <p>Une etudes de réferencement poussé</p>
                                </div>
                                <div className="bref-item">
                                    <img src={Check} alt="checked" style={{ width: "15%" }}/>
                                    <p>Renforcera votre image de marque</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}