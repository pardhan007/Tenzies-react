import React from "react";

export default function Header(props) {
    return (
        <div className="header">
            <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <button className="totalRolls">Count {props.count} </button>
        </div>
    )
}