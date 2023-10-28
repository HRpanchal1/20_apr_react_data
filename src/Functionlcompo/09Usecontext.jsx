import React from 'react';
import CompoA from './CompoA';
import { createContext } from 'react';

const Fname = createContext()

const Usecontext = () => {
    return (
        <>
            <h1>Usecontext</h1>
            <Fname.Provider value="vishal">
                <CompoA  />
            </Fname.Provider>

        </>
    );
}

export default Usecontext;
export {Fname}