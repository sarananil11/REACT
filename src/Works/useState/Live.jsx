import { useState } from "react";

const Live = () => {
    const [text, setText] = useState("");

    return (
        <div style={{ padding: "20px", maxWidth: "400px" }}>

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: "100%", padding: "8px" }}
            />

            <p>
                {text}
            </p>
        </div>
    );
};

export default Live;
