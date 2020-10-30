import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBot.css';

export default function NavBot() {

    return (
        <div className="navBot">
            <p> 
                <NavLink 
                className="bottom-nav"
                to="/services/vitrine"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                >
                    Site Vitrine
                </NavLink>
            </p>
            <p>
                <NavLink 
                className="bottom-nav"
                to="/services/ecommerce" 
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}>
                    Site E-Commerce
                </NavLink>
            </p>
            <p>
                <NavLink 
                className="bottom-nav"
                to="/services/complexe"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}>
                    Solution Web Complexe
                </NavLink>
            </p>
            <p>
                <NavLink 
                className="bottom-nav"
                to="/services/graphisme"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                >Conception Graphique
                </NavLink>
            </p>
            <p>
                <NavLink 
                className="bottom-nav"
                to="/services/bureautique"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                >
                    Freelancing
                    </NavLink>
            </p>
        </div>
    )
}