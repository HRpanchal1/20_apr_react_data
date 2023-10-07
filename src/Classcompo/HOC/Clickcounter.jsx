import React from 'react';
import { Component } from 'react';
import Updatecounter from './Hoc';

class Clickcounter extends Component {
  
    render() { 
        const {count , increment} = this.props
        return (
            <>
               <h1>{count}</h1>
               <h2>{this.props.name}</h2>
               <button onClick={increment}>Update</button>

            </>
        );
    }
}
 
export default Updatecounter(Clickcounter);