import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'

function Login() {
  const [user, setUser] = React.useState('');
  const [passWord, setPassWord] = React.useState('');

  const login = () => {
    console.log(user, passWord)
  }

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
          <input placeholder="username" onChange={e => setUser(e.target.value)} />
          <input placeholder="password" type="password" onChange={e => setPassWord(e.target.value)} />
        </div>
        <div className="l-btn">
          <div className="btn-su">
            Sign Up
          </div>
          <div className="btn-li" onClick={login}>
            Login
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login