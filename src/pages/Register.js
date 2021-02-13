import React, { useState } from 'react'
import Axios from 'axios'

const Register = (props) => {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    height: 0,
    weight: 0,
  })

  const { name, email, password, height, weight } = register

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setRegister({ ...register, [name]: value })
  }

  const handleRegister = async (e) => {
    e.preventDefault()

    const data = { name, email, password, height, weight }

    await Axios({
      method: 'POST',
      baseURL: 'http://localhost:8080',
      url: '/users/register',
      data: data,
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.token)
        props.history.push('/dashboard')
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className='container register'>
      <form className='form form--login' onSubmit={handleRegister}>
        <legend className='form__title'>Register</legend>
        <div className='form__request'>
          <label htmlFor='name' className='form__request--label'>
            Name
          </label>
          <input
            type='text'
            name='name'
            value={name}
            onChange={handleInputChange}
            className='form__request--input'
          />
        </div>
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
        <div className='form__request'>
          <label htmlFor='height' className='form__request--label'>
            Height
          </label>
          <input
            type='number'
            name='height'
            value={height}
            onChange={handleInputChange}
            className='form__request--input'
          />
        </div>
        <div className='form__request'>
          <label htmlFor='weight' className='form__request--label'>
            Weight
          </label>
          <input
            type='number'
            name='weight'
            value={weight}
            onChange={handleInputChange}
            className='form__request--input'
          />
        </div>
        <button className='button form__request--button'>SEND</button>
      </form>
    </div>
  )
}

export default Register
