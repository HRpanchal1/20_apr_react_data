import React from 'react';
import { useState } from 'react';


const Usestate = () => {
    const [count , setCount] = useState(0)
    // update = ( ) =>{
    //     console.log("update");
    // }

    function update(){
        console.log("update");
        setCount(count + 1)

    }
    return (
        <>
          <h1>Usestate</h1>
          <h2>{count}</h2>
          <button onClick={update}>update</button>
        </>
      );
}
 
export default Usestate;