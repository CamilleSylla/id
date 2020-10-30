import React from 'react';
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

import './Arg.css';
import Sign from '../../assets/icon/IconicDevSign.svg';
export default function Arg() {

    return (
        <div className="arg">
            <img src={Sign} alt="icon"/>
            <p className="argTitle">L'ensemble de notre savoir a votre disposition.</p>
            <p className="argQuote"> Profitez aussi de nos conseils en stratégie, communication digital et référencement. </p>
            <div className="argGrid">
                <div className="countUp">
                    <CountUp end={100} redraw={true} suffix="%">
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h5>Adapter</h5>
                    <p>Nous trouverons toujours une solution avantageuse</p>
                </div>
                <div className="countUp">
                    <CountUp end={100} redraw={true} suffix="%">
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h5>Optimiser</h5>
                    <p>Le contenue que nous proposont est performant en tout point</p>
                </div>
                <div className="countUp">
                    <CountUp end={50} redraw={true} suffix="K+" >
                        {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                                <span ref={countUpRef} />
                            </VisibilitySensor>
                        )}
                    </CountUp>
                    <h5>Lignes de codes</h5>
                    <p>Des crampes aux doigts mais votre satifaction les soignents</p>
                </div>
            </div>
        </div>
    )
}