import React from "react";

export default function Dice(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    let face;
    switch (props.value) {
        case 1:
            face = (
                <div className="dice first-face">
                    <span className="dot"> </span>
                </div>
            )
            break;
        case 2:
            face = (
                <div className="dice second-face">
                    <span className="dot"> </span>
                    <span className="dot"> </span>
                </div>
            )
            break;
        case 3:
            face = (
                <div className="dice third-face">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            )
            break;
        case 4:
            face = (
                <div className="fourth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
            break;
        case 5:
            face = (
                <div className="fivth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
            break;
        case 6:
            face = (
                <div className="sixth-face dice">
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <div className="column">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            )
            break;

        default:
            break;
    }


    return (
        <div
            onClick={() => props.toggle(props.id)}
            style={style}
            className="diceDiv"
        >
            {props.nums ? <p>{props.value}</p> : face}
        </div>
    )
}
