
import React, { useContext, useState } from 'react'
import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import './login.css';
import { useAuth } from '../../context/AuthContext';


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const location = useLocation()
  const { loginUser } = useAuth(); // Ensure loginUser is available in useAuth

  const handleSubmit= async(e)=>{
    e.preventDefault();
    
    try {
      const res = await axios.post("https://pear-worried-bonobo.cyclic.app/api/v1/auth/login", {
        email,
        password
      });

      if (res && res.data.success) {
        // Set authentication state upon successful login
         // Ensure loginUser is defined and callable
         if (typeof loginUser === 'function') {
            // Set authentication state upon successful login
            loginUser(res.data.token);
  
            // Redirect to the home page or any other desired route
            alert("Login Successfull")
            navigate('/');
          } else {
            console.error("loginUser function is not defined");
          }
      } else {
        alert("Wrong Credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Error Logging in");
    }
  }
  return (
      <div className="lgform-container">
        <form onSubmit={handleSubmit}>
        <h3 className='title'>Login Form</h3>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder='Email'
              required 
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword"
              placeholder='Password'
              required
            />
          </div>
          <div className='mb-3'>
          <button type="submit" onClick={() => {navigate('/forgot-password')}} className="btn btn-primary">
            Forgot Password
          </button>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <div className="d-flex flex-row justify-content-between">
          <p>Not Register Yet ? 
              <Link to='/register'> Click Here !</Link>
            </p>
        </div>
        </form>
      </div>
  )
}

export default Login
