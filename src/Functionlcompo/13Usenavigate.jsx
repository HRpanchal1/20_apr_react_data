import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usenavigate = () => {
    const navigate = useNavigate()

    const data =() =>{
        navigate("/")
    }
    return (
        <>
            <h1>Usenavigate</h1>
            <button onClick={data}>data</button>

        </>
    );
}

export default Usenavigate;