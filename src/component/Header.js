import { useState } from "react";
import {Link} from 'react-router-dom'

const Title=()=>{
    return (
    <a href="/">
        <img className="w-28" src="https://yt3.googleusercontent.com/FFffswAYvW-eIAKgSmGh85tMKFqp6SvLSSvx3BjvqJO2seP9pJnEeXWu_5HAMi82bZnDoVBWEA=s900-c-k-c0x00ffffff-no-rj" alt="logo"></img>
        </a>);
};
const Head=()=>{
    const [isLogged,setIsLogged]=useState(false);
    return (
        <div className="flex p-2 justify-between">
        <Title />
       <div >
        <ul className="flex  p-3" >
           <Link to="/"> <li className="p-2">
                Home
            </li> </Link>
            
            <Link to="/about"><li className="p-2">
                About
            </li></Link>
            
            <Link to="/contact"><li className="p-2">
                Contact
            </li></Link>
            <Link to="/cart"><li className="p-2">
                Cart
            </li></Link>
        </ul>
       </div>
       <div  className="p-2">
        {isLogged?<button onClick={()=>setIsLogged(false)}>Logout</button>:<button onClick={()=>setIsLogged(true)}>Login</button>}
       </div>
       </div>
);
};
export default Head;