import React from 'react';
import Card from './05Card';
import { Component } from 'react';
import Classcompodemo from './02Classcompodemo';
// import Classcompodemo from './02Classcompodemo';
// import Classcompodata from "./08Classcompodata.jsx"

class Maincard extends Component {

    render() { 
        return (

            <>

            <Classcompodemo data="name of your weppage"/>
            <Card img="https://picsum.photos/id/237/200/300" title="hello data"/>
            <Card img="https://picsum.photos/id/257/200/300"/>
            <Card img="https://picsum.photos/id/277/200/300"/>
             
             
            </>
        );
    }
}
 
export default Maincard;