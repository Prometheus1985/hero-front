import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='menu'>
      <img src={logo} alt='hero' className='menu__logo' />
      <ul className='menu__list'>
        <Link exact to='/home'>
          Home
        </Link>

        <Link exact to='/software'>
          Software
        </Link>
        <Link exact to='/register'>
          Register
        </Link>
        <Link exact to='/login'>
          Login
        </Link>
      </ul>
    </div>
  )
}

export default Navbar
