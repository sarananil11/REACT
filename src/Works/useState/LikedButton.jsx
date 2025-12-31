import React, { useState } from 'react'

function LikedButton() {
    const [like, setLike] = useState("Like");

    const likedFunction = () => {
        setLike(
            like === "Like" ?
                "Liked😀" :
                "Like"
        );
    };
    return (
        <div>
            <h1>Click to Like💚</h1>
            <br />
            <button type="button" onClick={likedFunction} > {like} </button>

        </div>
    )
}

export default LikedButton
