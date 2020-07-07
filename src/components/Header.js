import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'

function Header() {
  return (
    <div className="nav">
      <div className="nav-item">
        <div className="logo">logo</div>
        <div className="list-item">
          <div className="item">item</div>
          <div className="item">item</div>
          <div className="item">item</div>
        </div>
      </div>
      <div className="sign">
        <div className="signin">
          sign in
        </div>
        <div className="signup">
          sign up
        </div>
      </div>
    </div>
  )
}

export default Header