import React, { useContext } from 'react';
import { AppContext } from '../App';

function Counter() {
    const {data, handler} = useContext(AppContext); 

    return (
        <div>
            <h1>Counter: {data.count}</h1>
            <button onClick={() => handler("increment")}>-</button>
            <button onClick={() => handler("decrement")}>+</button>
        </div>
    );
}

export default Counter;
