import React from 'react'

const Conditional = () => {

    const isLoggedIn = true;  // also give false.
    return (
        <div>
            <p>{isLoggedIn ? "Welcome back !" : "Please Sign In !"}</p>
        </div>
    )
}

export default Conditional
