import React, { useEffect } from 'react';
import { useState } from 'react';

const Api = () => {

    const [apidata , setApidata] = useState([])


    // fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
    //     console.log(result);
    // })

    useEffect(( )=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((result)=>{
            console.log(result);
            result.json().then((response)=>{
                // console.log(response);
                setApidata(response)
            })
        })
    },[])
    console.log(apidata);

    return ( 
        <>
          <h1>Api</h1>
          <table width="100%" border="1">
            <tr>
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>completed</td>
            </tr>
            {
                apidata.map((item)=>
                  <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    {/* <td>{item.completed}</td> */}

                  </tr>
                )
            }
          </table>
        </>
     );
}
 
export default Api;