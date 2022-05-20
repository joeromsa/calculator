import React from "react";
import '../styles/Button.css';

const CalcButton = (props) => {

    return (
        <div>
            <button className={`buttonIcon ${props.background}`}>{props.text}</button>
        </div>
    );
}

export default CalcButton;