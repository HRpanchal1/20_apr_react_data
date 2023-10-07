import React from 'react';

import { Component } from 'react';
import Listandkeys from "../Classcompo/10ListsandKeys"
import Uncontrolledcomponents from "./08Uncontrolledcomponents"

class Classcompositionandinheritance extends Component {

    render() { 
        let data = "sameer"
        return (
            <>
               <h1>Classcompositionandinheritance</h1>
               <Listandkeys name={data}>
                  <h1>hello data</h1>
                 <Uncontrolledcomponents/>
               </Listandkeys>
            </>
        );
    }
}
 
export default Classcompositionandinheritance;