import React from 'react'
import './header2.css'
import phone2 from '../../../assets/images/2phone.jpg'
import google from '../../../assets/images/google.png'
import { Link } from 'react-router-dom'

const Header2 = () => {
  return (
    <div>
        <div className="signup-container">
      
      <div className="image-section">
        <img src={phone2} alt="" />
      </div>
      
      <div className="form-section">
        <h1>Create an account</h1>
        <p>Enter your details below</p>
        <form className="signup-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email or Phone Number" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="create-button">Create Account</button>
          <button className="google-button">
            <img src={google} alt="" />
            Sign up with Google
          </button>
        </form>
        <p className="login-text">
          Already have account? <Link to="/login" >Log in</Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Header2