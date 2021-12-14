import React from "react";
import { useHistory } from "react-router-dom";

function Signup() {
    let history = useHistory();
return (

    <>
    <h1> FOODAPP </h1>

    <div>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button onClick={() => {
            history.push("/Home");
        }}
        >
         Login 
         </button>
    </div>
    
    </>
    );
    }

export default Signup;