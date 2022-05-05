import React from 'react';
import CompThree from './CompThree';

const CompTwo = ({ name, id }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>id: {id}</h1>
            <CompThree name="Component Three" id="32" />
        </div>
    )
}

export default CompTwo;