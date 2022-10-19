import {useState} from 'react';
import File from './file';
function Login() {
  const [userName, setUserName] = useState('');
  const [password,setPassword] = useState('');
  const Signup =() =>{}
  const loginHAndler = () => {
    if(password.length < 8){
      alert("password not matches")
    } else {
      alert("Login Successfully")
    }
  };
  return (
    
    <div className='x'>
      <p>USERNAME</p>
    <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="user name"></input>
    
    <p>PASSWORD</p>
    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} placeholder="password"></input>
    <p><br></br></p>
    <button onClick={loginHAndler}>Login</button>
    <File data="Hi" userName={userName}/>
    <p>Don't have any account?</p>
    <button onClick={Signup} ><a href="pages" >SignUp</a></button>
   

</div>
  )
}

export default Login;

