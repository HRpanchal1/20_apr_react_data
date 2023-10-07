import React, { Component } from 'react';

import { Link ,Outlet } from 'react-router-dom';

class Classcompomenu extends Component{
    render(){
        return(
            <>
               <ul>
                {/* <li><Link to="Classcompointro">Classcompointro</Link></li> */}
                <li><Link to="Classcompodemo">Classcompodemo</Link></li>
                <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                <li><Link to="Maincard">Maincard</Link></li>
                <li><Link to="Classcompostate">Classcompostate</Link></li>
                <li><Link to="Conditionalrendering">Conditionalrendering</Link></li>
                <li><Link to="Uncontrolledcomponents">Uncontrolledcomponents</Link></li>
                <li><Link to="Controlledcomponents">Controlledcomponents</Link></li>
                <li><Link to="Listandkeys">Listandkeys</Link></li>
                <li><Link to="Classcompositionandinheritance">Classcompositionandinheritance</Link></li>
                <li><Link to="Maincounter">Maincounter</Link></li>
                {/* <li><Link to="Classcompositionandinheritance">Classcompositionandinheritance</Link></li> */}
               </ul>
               <Outlet></Outlet>
            </>
        )

    }
}
export default Classcompomenu