import React , {useContext} from "react";
//import CompC from './CompC'
import {name,year} from './Context'


const CompB=()=>{

    const fullname=useContext(name)
    const date=useContext(year)
    return(
        <div>
            <h1>useContext method</h1>
            <h3>{fullname}</h3>
            <h3>{date}</h3>
        </div>
    );
}
export default CompB;

//<h1>ComB</h1>
//<CompC/>