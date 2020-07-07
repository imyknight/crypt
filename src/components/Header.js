import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

function Header({ children }) {
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          <Link to='/'>
            <div className="logo">logo</div>
          </Link>
          <div className="list-item">
            <div className="item">item</div>
            <div className="item">item</div>
            <div className="item">item</div>
          </div>
        </div>
        <div className="sign">
          <Link to="/sign-in">
            <div className="signin">
              sign in
          </div>
          </Link>
          <Link to='/sign-up'>
            <div className="signup">
              sign up
          </div>
          </Link>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default Header