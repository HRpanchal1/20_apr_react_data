import React from 'react';
import { Link } from "react-router-dom";
import Navbar from './Navbar';
let name = "samir"
function About(){
    return(
     <>
     {/* <Navbar/>   */}
        <h1>my name is {name}</h1>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio numquam nisi, eos optio aliquid provident, doloremque culpa aliquam, officiis voluptatem beatae iusto vel! Facere consequatur hic incidunt asperiores nostrum cum.</p>
     </>
    )
}
export default About