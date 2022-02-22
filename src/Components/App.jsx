import React from "react";
import Header from "./Header";
import Para from "./Para";
import List from "./List";
import Count from "./count";
import Events from "./events";
import Bootstrapp from "../bootstrap";



const name="var name";

function App2(){
    let func2 = "App2 function name";
    return func2;
}

function App(){
    return(
        <div> 
            <Bootstrapp/>
            <Events/>
            <Count/>        
            {Header()}
            <Para/>
            <List/>         
        </div>  
    );
}
export default App;
export {App2, name };