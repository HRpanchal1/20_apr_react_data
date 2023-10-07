import React from 'react';

import { Component } from 'react';
import Clickcounter from './Clickcounter';
import Hovercounter from './Hovercounter';

class Maincounter extends Component {

    render() { 
        return (
            <>
            <Clickcounter/>
            <Hovercounter/>

            </>

        );
    }
}
 
export default Maincounter;