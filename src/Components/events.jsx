import React,{useState} from "react";

const Events=()=>{
    const colrr="purple";
   

    const [currentval,updatedval]=useState(colrr);
    const [name,click]=useState("check");

const changee=()=>{
    //console.log('clicked');
    let colr='orange';
    updatedval(colr);
    click("Go Back");

};

const changed=()=>{
    click("finished")
    updatedval("green")
    
};
    return(
        <div style={{backgroundColor:currentval}}>
        <h1>Events Component</h1>
        <button onClick={changee} onDoubleClick ={changed}>{name} </button>
        </div>
    );
}
export default Events;