import React from "react";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Name from "./Name";
import {Route,Switch} from 'react-router-dom';

const RouterComp=()=>{

// const Name=({match})=>{
//     return(
//         <h1>Name Page  {match.params.name}</h1>
//     );
// }
        
    return(
      <div>
      <h1>React Router Component</h1>
    <Switch>
       <Route exact path="/" component= {Home}></Route>
       <Route exact path="/About/" component={()=><About name="About" />}></Route>  
       <Route exact path="/Contact" render={Contact}></Route>
       <Route exact path="/Contact/:name/:lname" component={Name}></Route>
    </Switch>
      </div>
    );
}
export default RouterComp;

//line 19 mein props hain name k naam se
//we can use both component or render  