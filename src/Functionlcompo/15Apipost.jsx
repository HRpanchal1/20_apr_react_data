import React, { useEffect, useState } from 'react';

const Apipost = () => {
    const [name , setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userdata , setUserdata] = useState([])
    const submit = () =>{
        console.log("submit");
        // console.log(name , email ,password);
        let data = {name , email , password}
        console.log(data);

        fetch("http://localhost:5000/user" ,{
            method : "POST",
            headers : {
                "Content-Type": "application/json" 
            },
            body : JSON.stringify(data)
        }).then((result) =>{
            console.log(result);
            result.json().then((resp) =>{
                console.log(resp);  
            })
        })



    }
     useEffect(()=>{
        fetch("http://localhost:5000/user").then((result) =>{
            console.log(result);
            result.json().then((resp) =>{
                console.log(resp);
                setUserdata(resp)
            })
        })
     },[])
    return (
        <>
          <h1>Apipost</h1>

          name : <input type="text" value={name} 
          onChange={(e)=> setName(e.target.value)} /> <br />
          email : <input type="email" value={email}
           onChange={(e)=> setEmail(e.target.value)}  /> <br />
          password : <input type="password" value={password}
           onChange={(e)=> setPassword(e.target.value)}  /> <br />
          <button onClick={submit}>submit</button>

          <table border="1" width="50%" >
            <tr>
                <td>id</td>
                <td>name</td>
                <td>email</td>
                <td>password</td>
            </tr>
            {
                userdata.map((item) =>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                </tr>
                )
            }
          </table>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </>
      );
}
 
export default Apipost;