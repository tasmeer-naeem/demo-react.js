import React, { createContext } from "react";
import CompB from "./CompB";
//import CompA from "./CompA";
//import CompC from "./CompC";

const name=createContext()
const year=createContext()



const ContxtComp=()=>{
    return(
        <div>
           <name.Provider value="use of createContext">
           <year.Provider value="2021 sept">
           <CompB/>

           </year.Provider>
           </name.Provider>
        </div>
    );
}
export default ContxtComp;
export {name,year};

//<CompC/>