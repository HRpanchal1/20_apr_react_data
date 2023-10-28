import React, { useEffect, useLayoutEffect } from 'react';

const Uselayouteffect = () => {


    // let user = {
    //     name : 'sameer',
    //     age : 26,
    //     loction : "surat",
    //     minidata : {
    //         Lname : "patel"
    //     }
    // }
    // console.log(user.minidata.Lname);
    // let lname = user.minidata.Lname
    // console.log(lname);

    // let a = 2
    // let b = "2"

    // console.log(a== b && a===b);

    // console.log(undefined && null);
    // console.log(null && undefined);
    // console.log(null || undefined);
    // console.log(undefined || 0);

    useEffect(() => {
        console.log("useeffect-1");
    })
    useLayoutEffect(() => {
        console.log("useLayoutEffect");
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            console.log(result);
        })
    },[])
    useEffect(() => {
        console.log("useeffect-2");
    })
    useEffect(() => {
        console.log("useeffect-3");
    })
    console.log("UselayouteffectCompo");
    return (
        <>
            <h1>Uselayouteffect</h1>
        </>
    );
}

export default Uselayouteffect;