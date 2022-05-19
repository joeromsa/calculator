import React from "react";
import '../styles/Button.css';

const CalcButton = (props) => {

    const findColor = (color) => {
        console.log(color);
        if (color === 'gray') {
            return ['#D2D2D2 0% 0% no-repeat padding-box', '#FFFFFF'];
        } else if (color === 'white') {
            return ['#FFFFFF 0% 0% no-repeat padding-box', '#707070'];
        } else if (color === 'lightBlue') {
            return ['#B9D6E3 0% 0% no-repeat padding-box','#FFFFFF'];
        } else {
            return ['#4F79DC 0% 0% no-repeat padding-box', '#FFFFFF'];
        }
    }

    return (
        <div>
            <button className="buttonIcon" style={{background: findColor(props.background)[0], color: findColor(props.background)[1]}}>{props.text}</button>
        </div>
    );
}

export default CalcButton;