import React, { createContext } from 'react';
import One from './One';

const Fname = createContext()

const Usecontexthook = () => {
    let user = {
        name : "haridash",
        age : 25,
        loction : "surat"

    }
    return (
        <>
            <h1>Usecontexthook</h1>
            <Fname.Provider value={user.name + " " + user.age}>
                <One />
            </Fname.Provider>
        </>
    );
}

export default Usecontexthook;
export {Fname}