import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { withRouter } from 'react-router'
import { getToken, deleteToken } from '../token'

const listNavItem = ['About us', 'Affiliate', 'Get Started', 'FAQ', 'Contact']
  .map((item, index) => (<div key={index} className="nav-item">{item}</div>))

const Header = ({ children, props }) => {
  const isLoggedIn = !!getToken();
  console.log(isLoggedIn)
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          <Link to='/'>
            <div className="logo">
              <img className="img-logo" alt="logo" src="/logo@3x.png" />
            </div>
          </Link>
          <div className="list-nav-item">
            {listNavItem}
          </div>
          <div className="e-money">
            <div className="block-e-money">
              <div className="sec-e-money">
                <div className="btc">BTC </div>= $12,437.20
              </div>
              <div className="sec-e-money">
                <div className="eth">ETH </div> = $1,200
              </div>
            </div>
          </div>
        </div>
        {
          !isLoggedIn ?
            <div className="sign">
              <Link className="signin" to="/sign-in">
                sign in
            </Link>
              <Link className="signup" to='/sign-in'>
                sign up
            </Link>
            </div> :
            <div className="sign">
              <div className="signin">
                welcome
            </div>
              <div
                className="signup"
                onClick={() => {
                  deleteToken();
                  props.history.push('/')
                }}
              >
                logout
            </div>
            </div>
        }

      </div>
      <div>
        {children}
      </div>
    </div>
  )
}

export default withRouter(Header)