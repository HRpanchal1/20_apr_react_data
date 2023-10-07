import React from 'react';
import { Component } from 'react';
import Classcompointro from './01Classcompointro';
import Classcompodemo from './02Classcompodemo';
class Classcompoprops extends Component {

    render() { 
        // let name = "lalit"
        let user = {
            name : "lalit",
            age : 25,
            location : "surat"
        }

        return (
            <>
            <h1>my Props</h1>    
            <Classcompointro user={user}/>
            <Classcompodemo/>

            </>
        );
    }
}
 
export default Classcompoprops;