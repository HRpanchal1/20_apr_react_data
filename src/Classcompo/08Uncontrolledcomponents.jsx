import React from 'react';
import { Component } from 'react';
import {createRef} from "react"

class Uncontrolledcomponents extends Component {

    constructor() {
        // console.log("called"); 
        super();
        this.input = createRef();
    }


    Submit = (event)=>{
        event.preventDefault();


        console.log("submit");

        console.log(this.input.current);
        console.log(this.input.current.value);
    }
    render() { 
        return (
            <>
              
              <form  onSubmit={this.Submit}>
                    <input type="text" ref={this.input}  name="uname" id="uname" />
                    <input type="submit" name="btn" id="btn" />
                </form>
              
            </>
        );
    }
}
 
export default Uncontrolledcomponents;