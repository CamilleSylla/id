import React, {useState} from 'react';
import NavBot from './NavBot/NavBot';
import './Services.css';
import Vitrine from './Vitrine/Vitrine';


export default function Services () {
    return (
        <div>
            <Vitrine/>
            <NavBot/>
        </div>
    )
}