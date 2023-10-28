import React, { useContext } from 'react';
import { Fname } from './10Usecontexthook';

const Three = () => {
    const data = useContext(Fname)
    return ( 
        <>
         <h1>my web page data</h1>
         <h1>{data}</h1>
         {/* <Fname.Consumer>
            {
                (name) =>{
                    return <h1>{name}</h1>
                }
            }
         </Fname.Consumer> */}
        </>
     );
}
 
export default Three;