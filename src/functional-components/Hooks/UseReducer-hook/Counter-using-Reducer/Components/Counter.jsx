import React, { useReducer } from "react";
import counterReducer from "../Reducers/CounterReducer";

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return (
        <div style={{ textAlign: 'center', color: "brown" }}>
            <h1>count:{state.count}</h1>
            <button onClick={() => { dispatch({ type: "INCREMENT" }) }}>+</button>
            <button onClick={() => { dispatch({ type: "DECREMENT" }) }}>-</button>
            <button onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>
        </div>
    );
};

export default Counter;