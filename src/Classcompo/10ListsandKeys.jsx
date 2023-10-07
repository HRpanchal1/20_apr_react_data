import React from 'react';

import { Component } from 'react';

class Listandkeys extends Component {
    constructor(){
        super()
        this.state ={
            item : [1,2,3,4,5] 
        }
    }

    Add = () => {
    //   console.log("add");
    this.setState({
        item : [6,7,1,2,3,4,5] 
    })
    }

  
    render() {
        // let item = [1,2,3,4,5] 
        let items = this.state.item.map((list)=><li key={list.toString()}>{list}</li>)
        return (
            <>
              {/* <ul>
                <li id=''>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
              </ul> */}
              <ul>
                {items}
              </ul>
              <h1>{this.props.children}</h1>
              <button onClick={this.Add}>add</button>
              <h3>{this.props.name}</h3>
              
            </>
        );
    }
}
 
export default Listandkeys;