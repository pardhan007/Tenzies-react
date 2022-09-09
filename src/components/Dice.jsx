import React from "react";

export default function Dice(props) {

    const style = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    const face = [];
    switch (props.value) {
        case 1:
            face.push(<div className="dice first-face">
                <span class="dot"> </span>
            </div>)
            break;
        case 2:
            face.push(<div className="dice second-face">
                <span class="dot"> </span>
                <span class="dot"> </span>
            </div>)
            break;
        case 3:
            face.push(<div class="dice third-face">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>)
            break;
        case 4:
            face.push(<div class="fourth-face dice">
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>)
            break;
        case 5:
            face.push(<div class="fivth-face dice">
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div className="column">
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>)
            break;
        case 6:
            face.push(<div class="sixth-face dice">
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>)
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
            {face}
        </div>
    )
}
