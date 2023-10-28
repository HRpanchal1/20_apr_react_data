import React, { useReducer, useState } from 'react';

const initialState = 0

const reducer = (state, action) => {
    switch (action.type) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "multi": return state * 5;
        case "reset": return initialState
        default: return state
    }
}

const Usereducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)


    // const [count ,setCount] = useState(0)
    // const increment = () =>{
    //     setCount( count + 1)
    // }
    // const decrement = () =>{
    //     setCount( count - 1)
    // }
    return (
        <>
            <h1>usereducer</h1>
            <h2>count - {count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'multi' })}>*</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );
}

export default Usereducer;