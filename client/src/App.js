import React, {useState} from "react";
import Axios from "axios";

function App() {
  const [registerUsername,setRegisterUsername]=useState("");
  const [registerPassword,setRegisterPassword]=useState("");
  const [loginUsername,setLoginUsername]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const[data,setData]=useState("");
const register = () =>{
  Axios({
    method:"POST",
    data:{
      username:registerUsername,
      password:registerPassword
    },
    withCredentials:true,
    url:"http://localhost:4000/register"
  }).then((res)=>{
    console.log(res)
  })
};
const login = () =>{
  Axios({
    method:"POST",
    data:{
      username:loginUsername,
      password:loginPassword
    },
    withCredentials:true,
    url:"http://localhost:4000/login"
  }).then((res)=>{
    console.log(res)
  })
}
const getUser = () =>{
  Axios({
    method:"GET",
    withCredentials:true,
    url:"http://localhost:4000/getUser"
  }).then((res)=>{
    setData(res.data)
    console.log(res.data)
  })
}

  return (
    <div>
     <h1>Login</h1>
     <input 
     placeholder="Username..." 
     onChange={(e)=>setLoginUsername(e.target.value)}
     />
     <input 
     placeholder="Password..." 
     onChange={(e)=>setLoginPassword(e.target.value)}
     />
     <input type="submit" onClick={login} />

     <h1>Register</h1>
     <input 
     placeholder="Username..." 
     onChange={(e)=>setRegisterUsername(e.target.value)}
     />
     <input 
     placeholder="Password..." 
     onChange={(e)=>setRegisterPassword(e.target.value)}
     />
     <input type="submit" onClick={register} /><br /><br />

     
     <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
    </div>
  );
}

export default App;