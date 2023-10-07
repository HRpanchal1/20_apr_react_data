import React, { Component } from 'react';


class Classcompointro extends Component{
    render(){
        return(
            <>
               <h1>Class Component intro</h1>
               {/* <h2>{this.props.name}</h2> */}
               <p>{this.props.user.name}</p>
               <p>{this.props.user.age}</p>
               <p>{this.props.user.location}</p>
            </>
        )
    }
}
export default Classcompointro