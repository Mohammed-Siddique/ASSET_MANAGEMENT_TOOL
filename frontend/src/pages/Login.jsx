import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='login-container'>
      <h2>ASSET MANAGEMENT SYSTEM</h2>
      <form action="">
        <h2>LOGIN</h2>

        <div>
          <label htmlFor="">USERNAME</label>
          <input type="text" required placeholder='Enter Your Name' />
        </div>

        <div>
          <label htmlFor="">PASSWORD</label>
          <input type="password" required placeholder='Enter Your Password' />
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