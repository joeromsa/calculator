import React from "react";
import light from '../img/light.svg';
import '../styles/Header.css';

const CalcHeader = () => {
    return (
        <div className="header">
            <div className="title">
                <div className="text">Calculator</div>    
            </div>
            <div className="displayMode" style={{ backgroundImage: `url(${light})` }}></div>
        </div>
    );
}

export default CalcHeader;