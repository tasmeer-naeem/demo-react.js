import React from 'react'

function Cards(props){
    ///console.log(props)
    return(
        <div>
          <h1>{props.headerr}Cards function</h1>
          <img src={props.image} alt="my pic"></img>
          <button>{props.btn}Click Here</button>
        </div>
    );
}
export default Cards;