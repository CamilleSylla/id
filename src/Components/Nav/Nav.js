import React from 'react';


//style
import './Nav.css'

//rooter
import { Link } from 'react-router-dom';

//assets
import FB from '../../assets/icon/fb.svg'
import IG from '../../assets/icon/ig.svg'

export default function Nav( { show }) {

    return (

        <div className="navbar">
            <Link
                style={{ textDecoration: 'none', color: '#261417' }}
                to='/'
            >
                <p >Accueil</p>
            </Link>
            <Link
                style={{ textDecoration: 'none', color: '#261417' }}
                to='/services/vitrine'
            >
                <p>Services</p>
            </Link>

                <p onClick={ () => show({show : true})}>Contact</p>

            <div className="FB">
                <img src={FB} alt="facebook" />
            </div>
            <div className="IG">
                <img src={IG} alt="facebook" />
            </div>



        </div>
    )
}