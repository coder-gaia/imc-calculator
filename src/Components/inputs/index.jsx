import React from "react";

function Inputs({ onWeight, onHeight }) {
    return (
        <>
            <div>
                <label>Your Weight(kg): </label>
                <input type="number"
                    onChange={event => onWeight(event.target.value)}
                />
            </div>
            <div>
                <label>Your Height(cm):</label>
                <input type="number"
                    onChange={event => onHeight(event.target.value)}
                />
            </div>
        </>
    )
}

export default Inputs