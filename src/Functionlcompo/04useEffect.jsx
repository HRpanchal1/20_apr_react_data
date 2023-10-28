import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(5)

    function update() {
        console.log(count);
        setCount(count + 1)
    }
    function update2() {
        console.log(item);
        setItem(item + 1)
    }

    // useEffect(() => {
    //     // alert("helloo")
    //     fetch("https://jsonplaceholder.typicode.com/users").then((result) =>{
    //         console.log(result);
    //     }
          
    //     )

    // }, [update2,update])

    return (
        <>
            <button onClick={update}>{count}</button>
            <button onClick={update2}>{item}</button>
            <h1>useEffect </h1>
        </>
    );
}

export default UseEffect;