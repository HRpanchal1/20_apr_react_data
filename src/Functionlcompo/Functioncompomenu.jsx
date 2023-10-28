import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const Functionmenu = () => {
    return (
        <>
            <ul>
                <li><Link to="Functioncompointro">Functioncompointro</Link></li>
                <li><Link to="Functioncomprops">Functioncomprops</Link></li>
                <li><Link to="Usestate">Usestate</Link></li>
                <li><Link to="UseEffect">UseEffect</Link></li>
                <li><Link to="Uselayouteffect">Uselayouteffect</Link></li>
                <li><Link to="Usememo">Usememo</Link></li>
                <li><Link to="Usecallback">Usecallback</Link></li>
                <li><Link to="Api">Api</Link></li>
                <li><Link to="Usecontext">Usecontext</Link></li>
                <li><Link to="Usecontexthook">Usecontexthook</Link></li>
                <li><Link to="Usereducer">Usereducer</Link></li>
                <li><Link to="Usenavigate">Usenavigate</Link></li>
            </ul>
            <Outlet></Outlet>

        </>
    );
}

export default Functionmenu;