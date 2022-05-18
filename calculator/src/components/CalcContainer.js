import React from "react";
import CalcHeader from "./CalcHeader";
import CalcDisplay from "./CalcDisplay";
import CalcBody from "./CalcBody";
import "../styles/Container.css";

const CalcContainer = () => {
    return (
        <div className="body">
            <CalcHeader></CalcHeader>
            <CalcDisplay></CalcDisplay>
            <CalcBody></CalcBody>
        </div>
    );
}

export default CalcContainer;