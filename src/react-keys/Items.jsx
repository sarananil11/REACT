import React from 'react'

const Items = () => {

    const fruitItems = ['Apple', 'Banana', 'Orange'];
    return (
        <div>
            <ul>
                {fruitItems.map((itm, index) => (
                    <li key={index.key}>{itm}</li>
                ))}
            </ul>
        </div>
    );
};

export default Items
