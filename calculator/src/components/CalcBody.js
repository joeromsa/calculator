import React from "react";
import '../styles/Body.css';
import CalcButton from "./calcButton";

const CalcBody = () => {
    return (
        <div>
            <div className="calcBody">
                <CalcButton text="AC" background="gray"></CalcButton>
                <CalcButton text="C" background="gray"></CalcButton>
                <CalcButton text="+/-" background="gray"></CalcButton>
                <CalcButton text="%" background="gray"></CalcButton>
                <CalcButton text="7" background="white"></CalcButton>
                <CalcButton text="8" background="white"></CalcButton>
                <CalcButton text="9" background="white"></CalcButton>
                <CalcButton text="/" background="lightBlue"></CalcButton>
                <CalcButton text="4" background="white"></CalcButton>
                <CalcButton text="5" background="white"></CalcButton>
                <CalcButton text="6" background="white"></CalcButton>
                <CalcButton text="X" background="lightBlue"></CalcButton>
                <CalcButton text="1" background="white"></CalcButton>
                <CalcButton text="2" background="white"></CalcButton>
                <CalcButton text="3" background="white"></CalcButton>
                <CalcButton text="-" background="lightBlue"></CalcButton>
                <CalcButton text="0" background="white"></CalcButton>
                <CalcButton text="." background="white"></CalcButton>
                <CalcButton text="=" background="darkBlue"></CalcButton>
                <CalcButton text="+" background="lightBlue"></CalcButton>
            </div>
        </div>
        
    );
}

export default CalcBody;