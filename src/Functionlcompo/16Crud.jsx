import React, { useState } from 'react';
import "./Crud.css"
const Crud = () => {
    const [name, setName] = useState("")

    const [alldata, setAlldata] = useState([])


    const Adddata = () => {
        console.log("adddata");
        console.log(name);
        if (name.length !== 0) {
            setAlldata((newdata) => [...newdata, name])
            setName("")
        }
    }

    const datadelet = (index) => {
        console.log("datadelet", index);
        alldata.splice(index ,1)
        setAlldata([...alldata])

    }
    console.log(alldata);
    return (
        <>
            <h1>Crud</h1>

            <div className='input-fl'>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button onClick={Adddata}>Adddata</button>
            </div>
            {
                alldata.map((val, i) =>
                    <div className='btn-fl'>
                        <h1>{val}</h1>
                        {/* <h1>{i}</h1> */}
                        <button className='edit'>edit</button>
                        <button className='delet' onClick={() => datadelet(i)}>delet</button>
                    </div>
                )
            }
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

export default Crud;