import React from 'react';
import { Fname } from './09Usecontext';

const CompoC = () => {
    return ( 
        
        <>
        <p>this is my web page data</p>
        {/* <h1>{props.data}</h1> */}
        <Fname.Consumer>
            {
                (name) =>{
                    return <h1>{name}</h1>
                }
            }
        </Fname.Consumer>
        </>
     );
}
 
export default CompoC;