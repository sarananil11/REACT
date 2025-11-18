{/*useRef is a built-in React Hook that provides a way to
  interact with and store mutable values that persist across
 component re-renders without triggering a re-render of the component itself.
 * TO access the elements of DOM.
 */}

import React, { useState, useRef } from 'react';
export default function Player() {
    var playerRef = useRef();

    const [player, setPlayer] = useState('');

    function handleButtonClick() {
        setPlayer(playerRef.current.value);
        playerRef.current.value = "";
    };
    return (

        <section id='player'>
            <h2>Welcome {player ?? "User"}</h2>
            <p>
                <input ref={playerRef} type="text" />
                <button onClick={handleButtonClick}>Set Name</button>
            </p>
        </section>

    );
};
