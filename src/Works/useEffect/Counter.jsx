import React, { useEffect, useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const counterFunctionAdd = () => {
        setCount(prev => prev + 1);
    };

    const counterFunctionMin = () => {
        setCount(prev => prev - 1);
    };

    const counterFunctionReset = () => {
        setCount(0);
    };

    useEffect(()=>{
        console.log(`updated value is ${count}`);
    },[count])

    return (
        <div>
            <h1>Click the buttons</h1>
            <h2>Count is : {count}</h2>
            <div style={{ display: "flex", gap: "10px" }} >
                <button onClick={counterFunctionAdd}>+</button>
                <button onClick={counterFunctionMin}>-</button>
                <button onClick={counterFunctionReset}>Reset</button>


            </div>
        </div>
    );
}

export default Counter;