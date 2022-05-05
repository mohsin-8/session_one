import React, { useState } from 'react';
import CompTwo from './CompTwo';
import Counter from './Counter';

const CompOne = (props) => {
    const [count, setCount] = useState(0);
    const [isDay, setDay] = useState(false);

    return (
        <div className={`box ${isDay ? 'daylight' : ''}`}>
            <h1>Day Time: {isDay ? 'Morning' : 'Night'}</h1>
            <h1>{props.name}</h1>
            <h1>id: {props.id}</h1>
            <Counter count={count} />
            <button onClick={() => setCount(count + 1)}>Add</button>
            <button onClick={() => setCount(count - 1)}>Minus</button>
            <button onClick={() => setDay(!isDay)}>Update Day</button>

            <CompTwo name="Component Two" id="43" />
        </div>
    )
}

export default CompOne;