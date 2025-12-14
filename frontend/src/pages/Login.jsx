import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const response = await axios.post('http://localhost:8000/api/auth/login', {email, password});
      console.log(response);
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className='login-container'>
      <h2>ASSET MANAGEMENT SYSTEM</h2>
      <form onSubmit={handleSubmit}>
        <h2>LOGIN</h2>

        <div>
          <label htmlFor="email">USERNAME</label>
          <input type="email" required placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div>
          <label htmlFor="">PASSWORD</label>
          <input type="password" required placeholder='*******' onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className='check-box-frgtpw'>
          <div className='check-box'>
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <div className='frgtpw'>
            <a href="#">Forgot Password?</a>
          </div>
        </div>

        <button>LOGIN</button>

      </form>
    </div>
    </>
  )
}

export default Login