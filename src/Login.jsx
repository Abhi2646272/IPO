import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
function Login() {
  const nav = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const handleLogin = () =>{
    if(email === 'abc@gmail.com' && password === '12345'){
      nav('/dashboard');
     }else{
        nav('/');
      };
    }
  return (
    <div id='login'> 
     
        <form className=''>
        <h1 className="logo">iPo</h1>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" 
     value={password}
     onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handleLogin} className="btn btn-primary" >Submit</button> New Here? 
  <Link type="submit" className="" to="/register">Register</Link>
</form>
 

 

    </div>

    
  )
}

export default Login