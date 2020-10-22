import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBot.css';

export default function NavBot() {

    return (
        <div className="navBot">
            <p> 
                <NavLink 
                to="/services/vitrine"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                  style={{textDecoration: "none", color:" #D9D8D7"}}
                >
                    Site Vitrine
                </NavLink>
            </p>
            <p>
                <NavLink 
                to="/services/ecommerce" 
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                style={{textDecoration: "none", color:" #D9D8D7"}}>
                    Site E-Commerce
                </NavLink>
            </p>
            <p>
                <NavLink 
                to="/services/complexe"
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                style={{textDecoration: "none", color:" #D9D8D7"}}>
                    Solution Web Complexe
                </NavLink>
            </p>
            <p>
                <NavLink 
                to="/services/graphisme"
                style={{textDecoration: "none", color:" #D9D8D7"}}
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                >Conception Graphique
                </NavLink>
            </p>
            <p>
                <NavLink 
                to="/services/bureautique"
                style={{textDecoration: "none", color:" #D9D8D7"}}
                activeStyle={{
                    fontWeight: "bold",
                    color: "#261417"
                  }}
                >
                    Support Bureautique
                    </NavLink>
            </p>
        </div>
    )
}