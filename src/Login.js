import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';



 const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const isLoginPage = location.pathname === "/";
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleSubmit = (event) => {
      if (userName=== "admin" && password === "admin") {
        setIsLoggedIn(true);
      } else {
        alert("Invalid username or password");
      }
     
    };
  
    return (
       <div>{isLoginPage && (
      <div>
        <h2>Login to Snapdeal</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          
          <button type="submit" onClick={handleSubmit}> 
      <Link to="/home">Login</Link> 
    </button>
   
        </form>
      </div>
      )}
      </div>
    );
  }


export default Login