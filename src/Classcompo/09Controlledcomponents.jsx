import React from 'react';
import { Component } from 'react';
class Controlledcomponents extends Component {

    constructor(){
        super()
        this.state = {
            name : ""
        }
    }

    Submit = (event)=>{
        event.preventDefault();
        console.log("submit");
        console.log(this.state.name);
    }
    render() { 
        return ( 
            <>
            <form  onSubmit={this.Submit}>
                    <input value={this.state.name} onChange={(event)=>this.setState({name : event.target.value})} type="text" name="uname" id="uname" />
                    <input type="submit" name="btn" id="btn" />
                </form>
            </>
        );
    }
}
 
export default Controlledcomponents;