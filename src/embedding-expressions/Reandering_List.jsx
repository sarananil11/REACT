import React from 'react'

const Reandering_List = () => {

    const fruits = ['apple', 'banana', 'mango'] //array
    return (
        <div>
            <ul>
                {fruits.map((fruits, index) => (
                    <li key={index}>{fruits}</li>
                ))}
            </ul>

        </div>
    )
}

export default Reandering_List
