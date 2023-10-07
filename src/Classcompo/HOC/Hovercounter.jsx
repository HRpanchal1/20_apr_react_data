import React from 'react';

import { Component } from 'react';
import Updatecounter from './Hoc';

class Hovercounter extends Component {


    render() { 
        return (
            <>
             <h1>{this.props.count}</h1>
             <button onMouseEnter={this.props.increment}>Update</button>
            </>
        );
    }
}
 
export default Updatecounter(Hovercounter);