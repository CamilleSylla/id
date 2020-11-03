import React from 'react';
import Arg from './Arg';
import Desc from './Desc';


//style
import HomeService from './HomeService';

//component
import Intro from './Intro'
export default function Home ({show}) {

    return (

        <div className="page">
            <Intro show={show}/>
            <Desc/>
            <HomeService/>
            <Arg/>
        </div>
    )
}