import React from 'react';
import { Component } from 'react';

class Conditionalrendering extends Component {
    constructor(){
        super()
        this.state = {
            islogin : true
        }
    }

    render() { 

        return this.state.islogin && <><div><h1>welcome Tops</h1></div></> 



    //    return this.state.islogin ?  <><div><h1>welcome Tops</h1></div></>  :
    //     <><div><h1>welcome Guest</h1></div></>

        
        // let msg
        
        // if (this.state.islogin) {
        //     msg =  <><div><h1>welcome Tops</h1></div></>     
        // }
        // else{
        //     msg =  <><div><h1>welcome Guest</h1></div></>
        // }
        // return msg


        // if(this.state.islogin){
        //     return <> <h1>welcome tops</h1></>
        // }
        // else{
        //     return <> <h1>welcome guest</h1></>
        // }


        // return (


            // <>
            //   if (condition) {
                
            //   }


               {/* <h1>welcome tops</h1>
               <h1>welcome guest</h1> */}
            // </>

        // );
   }
}
 
export default Conditionalrendering;