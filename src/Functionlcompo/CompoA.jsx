import React from 'react';
import CompoB from './CompoB';

const CompoA = (props) => {
    return ( 
        <>
          <CompoB/>
          {/* <h1>{props.data}</h1> */}
        </>
     );
}
 
export default CompoA;