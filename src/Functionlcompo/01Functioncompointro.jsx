import React from 'react';
import Functioncomprops from "./02Functioncompoprops"


const Functioncompointro = () => {
    let name = "sameer"
    return ( 
        <>
         <h1>Functioncompointro</h1>
         <Functioncomprops name={name} email="sameer@gmail.com">
            <h1>data</h1>
         </Functioncomprops>
        </>
     );
}
 
export default Functioncompointro;