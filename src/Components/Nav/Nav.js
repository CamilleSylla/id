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
                <NavLink className="nav-link"
                    exact
                    activeStyle={{
                        color: "#261417"
                    }}
                    to='/'
                >
                    <p >Accueil</p>
                </NavLink>
                <NavLink className="nav-link"
                    activeStyle={{
                        color: "#261417"
                    }}
                    to='/services'
                >
                    <p>Services</p>
                </NavLink>

                <p className="nav-contact" onClick={() => show({ show: true })}>Contact</p>
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