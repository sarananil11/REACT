import React, { useState } from "react";

function ChangeColor() {
    const [color, setColor] = useState("white");

    const changeBgColor = () => {
        setColor(
            color === "white"
                ? "red"
                : color === "red"
                    ? "blue"
                    : color === "blue"
                        ? "green"
                        : "white"
        );
    };

    return (
        <div
            style={{
                backgroundColor: color,

            }}
        >
            <h1>Background color: {color}</h1>

            <button type="button" onClick={changeBgColor}>
                Change
            </button>
        </div>
    );
}

export default ChangeColor;
