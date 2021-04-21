import React from 'react'
import { Redirect } from 'react-router'

export const Profile = ({ name, isAuth }) => {

  if (!isAuth) return <Redirect to='/login' />

  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}
