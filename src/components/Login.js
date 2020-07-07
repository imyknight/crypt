import React from 'react'
import '../styles/login.scss'
import { Link } from 'react-router-dom'
import { setToken } from '../token'
import gql from 'graphql-tag'
import { useMutation } from 'urql'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`
const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`

function Login(props) {
  const [isLogin, setIsLogin] = React.useState('');

  const [name, setName] = React.useState('');
  const [password, setPassWord] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [state, executeMutation] = useMutation(
    isLogin ? LOGIN_MUTATION : SIGNUP_MUTATION
  )

  const mutate = React.useCallback(() => {
    executeMutation({ email, password, user: name })
      .then(({ data }) => {
        if (data) {
          const token = data && data[isLogin ? 'login' : 'signup'].token
          setToken(token)
          props.history.push('/')
        }
      })
  }, [executeMutation, props.history, isLogin, email, password, name])

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
          {
            state.fetching ? <img className="img-loading" src="/loading.png" alt="loading" /> :
              isLogin ?
                <p>Please Login to continue</p> :
                <p>Register new account</p>
          }

        </div>
        <div className="input-section">
          {
            !isLogin && (
              <input placeholder="username" onChange={e => setName(e.target.value)} />
            )
          }
          <input placeholder="email" onChange={e => setEmail(e.target.value)} />
          <input placeholder="password" type="password" onChange={e => setPassWord(e.target.value)} />
        </div>
        <div className="l-btn">
          <div
            className="btn-su"
            onClick={mutate}
          >
            {isLogin ? "login" : "create account"}
          </div>
          <div
            className="btn-li"
            disable={state.fetching}
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "need to create account" : "have an account?"}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login