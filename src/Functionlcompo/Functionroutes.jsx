import React from 'react';
import { Routes, Route } from "react-router-dom";
import Functionmenu from './Functioncompomenu';
import Functioncompointro from './01Functioncompointro';
// import Functioncomprops from './Functioncomprops';
import Functioncomprops from "./02Functioncompoprops"
import Usestate from './03Usestate';
import UseEffect from './04useEffect';
import Uselayouteffect from './05Uselayouteffect';
import Usememo from './06Usememo';
import Usecallback from './07Usecallback';
import Api from './08Api';
import Usecontext from './09Usecontext';
// import Usecontext from './09Usecontext';
import Usecontexthook from './10Usecontexthook';
import Usereducer from './11Usereducer';
import Usenavigate from './13Usenavigate';
import Apipost from './15Apipost';
import Crud from './16Crud';
const Functionroutes = ()=>{
    return (
        <>
          <Routes>
            <Route path='/' element={<Functionmenu/>}>
                <Route path='Functioncompointro' element={<Functioncompointro/>}/>
                <Route path='Functioncomprops' element={<Functioncomprops/>}/>
                <Route path='Usestate' element={<Usestate/>}/>
                <Route path='UseEffect' element={<UseEffect/>}/>
                <Route path='Uselayouteffect' element={<Uselayouteffect/>}/>
                <Route path='Usememo' element={<Usememo/>}/>
                <Route path='Usecallback' element={<Usecallback/>}/>
                <Route path='Api' element={<Api/>}/>
                <Route path='Usecontext' element={<Usecontext/>}/>
                <Route path='Usecontexthook' element={<Usecontexthook/>}/>
                <Route path='Usereducer' element={<Usereducer/>}/>
                <Route path='Usenavigate' element={<Usenavigate/>}/>
                <Route path='Apipost' element={<Apipost/>}/>
                <Route path='Crud' element={<Crud/>}/>
            </Route>
          </Routes>
        </>
    )

}

export default Functionroutes