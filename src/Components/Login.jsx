import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import { saveUser } from '../Reducers/AuthReducer'


export const Login = ({ isAuth }) => {
  const [name, setName] = useState('')

  const [email, setEmail] = useState('')
  const [emailIsDirty, setEmailIsDirty] = useState(false)
  const [emailError, setEmailError] = useState('')

  const [password, setPassword] = useState('')
  const [passwordIsDirty, setPasswordIsDirty] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const [isValid, setIsValid] = useState(false)

  const dispatch = useDispatch()

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (!re.test(String(email).toLowerCase())) {
      setEmailError('Password is invalid')
    } else setEmailError('')
  }

  const validatePassword = (password) => {
    const re = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    if (!re.test(password)) {
      setPasswordError('Password is invalid')
    } else setPasswordError('')
  }

  const blureHandler = (inputName) => {
    switch (inputName) {
      case 'email':
        setEmailIsDirty(true)
        validateEmail(email)
        break
      case 'password':
        setPasswordIsDirty(true)
        validatePassword(password)
        break
    }
  }

  useEffect(() => {
    if (emailIsDirty && passwordIsDirty && !passwordError && !emailError && name.trim().length !== 0) {
      setIsValid(true)
    } else setIsValid(false)
  }, [email, password, passwordError, emailError, emailIsDirty, passwordIsDirty, name])

  const handleSubmit = () => {
    const data = { name, email, password }
    dispatch(saveUser(data))
  }

  if (isAuth) return <Redirect to='/profile' />

  return (
    <div className="container ">
      <h2>Login</h2>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input-field col s6">
            <input
              id="name"
              type="text"
              onBlur={(e) => blureHandler(e.target.id)}
              onChange={(e) => setName(e.target.value)} />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s6">
            <input
              id="email"
              type="text"
              className={!emailIsDirty ? '' : (emailError ? 'invalid' : 'valid')}
              onBlur={(e) => blureHandler(e.target.id)}
              onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="email">Email</label>
            <span className="helper-text" data-error="Неверный email" data-success="Корректный email" />
          </div>
          <div className="input-field col s6">
            <input
              id="password"
              type="password"
              className={!passwordIsDirty ? '' : (passwordError ? 'invalid' : 'valid')}
              onBlur={(e) => blureHandler(e.target.id)}
              onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">Password</label>
            <span className="helper-text" data-error="Неверный Пароль" data-success="Корректный Пароль">
              Пароль должен содержать минимум 8 символов, минимум 1 цифру, минимум 1 спецсимвол, минимум 1 заглавну букву
            </span>
          </div>
        </div>
        <div className="btn" disabled={!isValid} onClick={handleSubmit}>
          Submit
        </div>
      </form>
    </div>

  )
}
