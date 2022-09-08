import React from "react";

export default function Dice(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    return (
        <div
            onClick={() => props.toggle(props.id)}
            className="oneDice"
            style={style}
        >
            <h1>{props.value}</h1>
        </div>
    )
}
