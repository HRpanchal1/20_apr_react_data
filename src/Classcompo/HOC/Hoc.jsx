import React from 'react';

import { Component } from 'react';

const Updatecounter = Originalcomponent =>{
    class Newcomponent extends Component {
        constructor(){
            super()
            this.state = {
                count : 0
            }
        }
        increment = ()=>{
            this.setState({count : this.state.count + 1})
        }
        render() { 
            return (
                <>
                 <Originalcomponent count={this.state.count} increment={this.increment}  name="sameer"/>
                </>
            );
        }
    }
    return Newcomponent
}
export default Updatecounter