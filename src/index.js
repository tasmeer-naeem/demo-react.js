import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Cards from './Components/Cards';
import dataa from './Components/data';
import ContxtComp from './HooksComponents/Context'
import EffectComp from './HooksComponents/Effect';
import APIComp from './APIComponents/CompA';
import RouterComp from './RouterComponents/RouterComp';
import  ReactDOM  from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import * as AppComponent from './Components/App';
//import App , {App2, name } from './Components/App';


// const name="JS expression";
// const topic="backticks";
// const img1="https://picsum.photos/200/300";
// const img2="https://picsum.photos/250/300";
// const img3="https://picsum.photos/300/300";

//console.log(dataa[0].id)
//console.log(dataa[0].headerr)
//console.log(dataa[0].image)
//console.log(dataa[0].btn)

ReactDOM.render(
  // <div>
  // <h1>Hello World</h1>
  // <h2>react demo</h2>
  // <p>render takes only single tag</p>
  // </div>,

  //or use array method
  // [
  // <h1>Hello World</h1>,
  // <h2>react demo</h2>,
  // <p>render uses array method</p>
  // ],

  //or use React.Fragment method or use  <> </>
  // <>
  //   <h1 className="heading">Hello World</h1>
  //   <h2>react demo</h2>
  //   <p>render uses React.Fragment method</p>
  //   <p>this is {name} in JSX</p>
  //   <p>JS exp {2+3}</p>
  //   <p>this is {name + " " + topic} concatination method</p>
  //   <p>this is {name} {topic} without concatination</p>
  //   <p>{`this is backtick method : ${name}  ${topic}`}</p>
  //   <h3  contentEditable="true" target="">JSX attributes</h3>
  //   <div className="imgcss">
  //   <img src={img1} alt="random images" />
  //   <img src={img2} alt="random images" />
  //   <img src={img3} alt="random images" />
  //   </div>
  // </>,

  
  <> 
  <BrowserRouter>  
   <RouterComp/>
  </BrowserRouter>

  <APIComp/>
  <EffectComp/>
  <ContxtComp/>
    <Cards
    key={dataa[0].id}
    headerr={dataa[0].headerr}
    image={dataa[0].image}
    //btn=""
    />
    <Cards
    //headerr=""
    image={dataa[1].image}
    //btn=""
    />
    <Cards
    //headerr=""
    image={dataa[2].image}
    //btn=""
    />

    <ol>
     <li>{AppComponent.default()}</li>
     <li>{AppComponent.App2()}</li>
     <li>{AppComponent.name}</li>
     </ol>
  </>,

  //<React.StrictMode>
    //<App />
  //</React.StrictMode>,
  document.getElementById('root')
);

//spread operator
const arr1=['abc','xyz','rst'];
const arr2=['mno','pqr','ghi'];
const finalarr=[...arr1,...arr2];
//console.log(finalarr);

//or
const arr3=['abc','xyz','rst'];
const finalarr2=['alphabet',...arr3,'finished'];
//console.log(finalarr2);

//or
const arr4={
  name:'tasmeer',
  fname:'naeem'
}
const arr5={
  id:9188,
  ...arr4,
  age:19,
  degree:'BSCS'
}
//console.log(arr5);

//or
const arr6=['abc','xyz','rst','mno','pqr','ghi'];
var [firstval,...remainingval]=arr6       //destructuring
//console.log(firstval);
//console.log(remainingval);


//javascript method
//var h1 = document.createElement("h1");
//h1.innerHTML = "hello world";
//document.getElementById('root').appendChild(h1);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
