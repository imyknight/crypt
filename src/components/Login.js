import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
      <div className="content">
        <Link to="/">
          <div className="logo">
            <div className="logo-item">
              <img className="img-logo" alt="logo" src="/logo@3x.png" />
            </div>
          </div>
        </Link>
        <div className="pls-login">
          <p>Please Login to continue</p>
        </div>
        <div className="input-section">
          <input placeholder="username" />
          <input placeholder="password" />
        </div>
        <div className="l-btn">
          <div className="btn-su">
            Sign Up
          </div>
          <div className="btn-li">
            Login
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login