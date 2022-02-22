import React from "react";
import { useParams , useLocation , useHistory} from "react-router-dom";

const Name=()=>{
    const {name,lname}=useParams()
    const location=useLocation();
    const history=useHistory();
    //console.log(history)
    //console.log(location)  
    return(
        <div>
        <h1>Name Page  {name} {lname}</h1>
        <h3>Location is {location.pathname}</h3>
        {location.pathname === `/Contact/use/Params` ? ( <button onClick={()=> history.push('/') }>Click Me</button> ) : null}

        </div>
    );
}
export default Name;

//{location.pathname === `/Contact/use/Params` ? ( <button onClick={()=> alert('donee !')}>Click Me</button> ) : null}