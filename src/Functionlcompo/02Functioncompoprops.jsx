import React from 'react';

const Functioncompoprops = (props) => {
    return ( 
        <>
          <h1>Functioncompoprops</h1>
          <h2>{props.name}</h2>
          <h2>{props.email}</h2>
          <div>
            {props.children}
          </div>
        </>
     );
}
 
export default Functioncompoprops;