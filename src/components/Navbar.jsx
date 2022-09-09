import React from 'react';

export default function Navbar(props) {
    return (
        <nav className={props.nums ? "nums" : ""}>
            <h1>Tenzies</h1>
            <div className="toggler">
                <p className="toggler--light">Dots</p>
                <div
                    className="toggler--slider"
                    onClick={props.toggleNumDots}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Nums</p>
            </div>
        </nav>
    )
}