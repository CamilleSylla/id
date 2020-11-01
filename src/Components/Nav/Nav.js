import React from 'react';


//style
import './Nav.css'

//rooter
import { Link, NavLink } from 'react-router-dom';

//assets
import FB from '../../assets/icon/fb.svg'
import IG from '../../assets/icon/ig.svg'

export default function Nav({ show }) {
    return (

        <div className="navbar">
            <div className="nav-page">
                    <a href="/">Accueil</a>

                <div class="dropdown">
                    <span>Services</span>
                    <div class="dropdown-content">
                        <NavLink className="nav-link"
                            activeStyle={{
                                color: "#261417"
                            }}
                            to='/services/vitrine'
                        >
                            <p>Site Vitrine</p>
                        </NavLink>
                        <NavLink className="nav-link"
                            activeStyle={{
                                color: "#261417"
                            }}
                            to='/services/ecommerce'
                        >
                            <p>Site E-commerce</p>
                        </NavLink>
                        <NavLink className="nav-link"
                            activeStyle={{
                                color: "#261417"
                            }}
                            to='/services/complexe'
                        >
                            <p>Solution web complexe</p>
                        </NavLink>
                        <NavLink className="nav-link"
                            activeStyle={{
                                color: "#261417"
                            }}
                            to='/services/graphisme'
                        >
                            <p>Conception graphique</p>
                        </NavLink>
                        <NavLink className="nav-link"
                            activeStyle={{
                                color: "#261417"
                            }}
                            to='/services/freelancing'
                        >
                            <p>Freelancing</p>
                        </NavLink>
                    </div>
                </div>
                <a className="nav-contact" onClick={() => show({ show: true })}>Contact</a>
            </div>
            <div className="nav-icons">

                <div className="FB">
                    <img src={FB}
                        alt="facebook"
                        onClick={(e) => (window.open('https://www.facebook.com/IconicDev-102040181691238'))}
                    />
                </div>
                <div className="IG">
                    <img
                        src={IG}
                        alt="facebook"
                        onClick={(e) => (window.open('https://www.instagram.com/iconicdev.id/'))}
                    />
                </div>
            </div>


        </div>
    )
}