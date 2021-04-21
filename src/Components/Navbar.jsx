import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../Reducers/AuthReducer'



export const Navbar = ({ isAuth }) => {
  const dispatch = useDispatch()

  const showMenu = () => {
    if (isAuth) {
      return <>
        <li><Link to="/profile">Profile</Link></li>
        <li><span className="btn" onClick={() => dispatch(logout())}>Logout</span></li>
      </>
    }
    else return <li><Link to="/login">Login</Link></li>
  }


  return (
    <nav >
      <div className="nav-wrapper">
        <div className='container'>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Main</Link></li>
            {showMenu()}
          </ul>
        </div>
      </div>
    </nav>
  )
}
