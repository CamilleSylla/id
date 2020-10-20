import React from 'react';
import Arg from './Arg';
import Desc from './Desc';


//style
import './Home.css'
import HomeService from './HomeService';

//component
import Intro from './Intro'
export default function Home () {

    return (

        <div>
            <Intro/>
            <Desc/>
            <HomeService/>
            <Arg/>
        </div>
    )
}