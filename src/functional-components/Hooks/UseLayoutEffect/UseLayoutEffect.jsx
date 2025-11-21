// used to change height , width, position. it runs before we execute the project.

import React, { useLayoutEffect, useRef } from 'react'
function UseLayoutEffect() {
    const boxRef = useRef(null);

    useLayoutEffect(() => {
        // runs before the UI is painted
        const width = boxRef.current.offsetWidth;
        console.log("Box width :", width);
    }, []);
    return (
        <div
            ref={boxRef}
            style={{
                width: "200px",
                height: "100px",
                background: "skyblue",
                padding: "10px",
                fontSize: "20px"

            }}
        >

            <p>Hello useLayoutEffect</p>


        </div>
    )
}

export default UseLayoutEffect
