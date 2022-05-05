import React, { useReducer } from 'react';
import CounterReducer from "../context/CounterReducer";

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 0);
    console.log(state);
    return (
        <div>
            <h1>This task is work with CounterReducer</h1>

            <h2>You cliked {state} Times</h2>

            <button onClick={() => dispatch("INCREMENT")}>INCREMENT REDUCER</button>
            <button onClick={() => dispatch("DECREMENT")}>DECREMENT REDUCER</button>
        </div>
    )
}

export default Child2;