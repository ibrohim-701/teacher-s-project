import React from 'react'
import phone2 from '../../../assets/images/2phone.jpg'
import google from '../../../assets/images/google.png'

const Login2 = () => {
  return (
    <div>
        <div className="signup-container">
      
      <div className="image-section">
        <img src={phone2} alt="" />
      </div>
      
      <div className="form-section">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>
        <form className="signup-form">
          <input type="text" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="create-button">Login</button>
          <button className="google-button">
            <img src={google} alt="" />
            Forget Password?
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Login2