import React, { useState } from 'react';
import { useMemo } from 'react';

const Usememo = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const multicount = useMemo(function multicount() {
        console.log("multicount");
        return count * 5
    },[count])
    // function multicount() {
    //     console.log("multicount");
    //     return count * 5
    // }
    return (

        <>

            <h1>Usememo</h1>
            <h2>{count}</h2>
            <h2>{item}</h2>
            <h3>{multicount}</h3>

            <button onClick={() => setCount(count + 1)}>updatecount</button>
            <button onClick={() => setItem(item + 5)}>updatecount</button>

        </>

    );
}

export default Usememo;