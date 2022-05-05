import React, { useContext } from 'react';
import counterContext from '../context/CounterContext';

const Child = () => {
    let count = useContext(counterContext);
    console.log(count);
    return (
        <div>
            <h1>This task is work with CounterContext</h1>
            <h2>you cliked {count[0]} times</h2>

            <button onClick={() => { count[1](++count[0]) }}>INCREMENT CONTEXT</button>
            <button onClick={() => { count[1](--count[0]) }}>DECREMENT CONTEXT</button>
        </div>
    )
}

export default Child;