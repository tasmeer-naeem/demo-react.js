import React, {useState,useEffect } from "react";


const EffectComp=()=>{
  const [num,setnum]=useState(0)
  const [nums,setnums]=useState(0)

//  useEffect(() => {
//     alert("I am clicked");
//  },[num]);   //0r });


// const IncNum=()=>{
//         setnum(num+1);
// };
    return(
        <div>
        <h1>useEffect Component</h1>
        <button onClick={()=>{
            setnum(num+1)
        }}> Click Me {num} </button>  

        <button onClick={()=>{
            setnums(nums+1)
        }}> Click Me {nums} </button>  
        </div>
    );
}
export default EffectComp;

// <button onClick={IncNum} >Click Me : {num}</button>