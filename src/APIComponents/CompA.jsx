import React,{useState,useEffect}from "react";
import axios from 'axios'


const CompA=()=>{
    const [num,setNum]=useState()
    const [name,setName]=useState()
    const [move,setMove]=useState()

    useEffect(() => {
      // alert("hi")
      async function getdata(){
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}` );
        console.log(res);
        setName(res.data.name)
        setMove(res.data.moves.length)
    }
    getdata()
    });

    
    return(
        <div>
        <h1>API Component</h1>
            <select value={num} onChange={(event)=>{
                setNum(event.target.value)
            }} >
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <h1 >  You Choose <span style={{color:"red"}}>{num} </span> </h1>
            <h1 >  Name is <span style={{color:"red"}}> {name}</span> </h1>
            <h1 >  Move is <span style={{color:"red"}}> {move} </span> </h1>
            
        </div>
    );
}
export default CompA;