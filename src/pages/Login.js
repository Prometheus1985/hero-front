import React, { useState } from 'react'

const Login = () => {
  const [login, setLogin] = useState({ email: '', password: '' })

  const { email, password } = login

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setLogin({ ...login, [name]: value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(login)
  }

  return (
    <div className='container register'>
      <form className='form form__login' onSubmit={handleLogin}>
        <legend className='form__title'>Login</legend>

        <div className='form__request'>
          <label htmlFor='email' className='form__request--label'>
            Email
          </label>
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleInputChange}
            className='form__request--input'
          />
        </div>
        <div className='form__request'>
          <label htmlFor='password' className='form__request--label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleInputChange}
            className='form__request--input'
          />
        </div>

        <button className='button form__request--button'>ENTER</button>
      </form>
    </div>
  )
}

export default Login
