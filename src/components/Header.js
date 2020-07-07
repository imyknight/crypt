import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { withRouter } from 'react-router'
import { getToken, deleteToken } from '../token'

const Header = (props, { children }) => {
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
          <div className="list-item">
            <div className="item">item</div>
            <div className="item">item</div>
            <div className="item">item</div>
          </div>
        </div>
        {
          !isLoggedIn ?
            <div className="sign">
              <Link to="/sign-in">
                <div className="signin">
                  sign in
                  </div>
              </Link>
              <Link to='/sign-in'>
                <div className="signup">
                  sign up
                </div>
              </Link>
            </div> :
            <div className="sign">
              <div className="signin">
                welcome
              </div>
              <div 
                className="signup"
                onClick={ () => {
                  deleteToken();
                  props.history.push('/')
                } }
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