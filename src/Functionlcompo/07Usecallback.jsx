import React, { useCallback } from 'react';
import { useState } from 'react';
import Childcompo from './Childcompo';
const Usecallback = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState(10)

    const data = useCallback(() => {
        //data
    },[])

    // function data (){
    //     console.log("data");
    // }
    return (
        <>

            <h1>Usecallback</h1>

            <h2>{count}</h2>
            <h2>{item}</h2>
            <Childcompo data={data}/>

            <button onClick={() => setCount(count + 1)}>updatecount</button>
            <button onClick={() => setItem(item + 5)}>updateitem</button>


        </>
    );
}

export default Usecallback;