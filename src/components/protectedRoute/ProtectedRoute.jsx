import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import Login from '../login/Login'

export default function ProtectedRoute({children}) {

    const {userToken} = useContext(AuthContext)

  return <>
    {
        userToken ? children : <Login/>
    }
  </>
}
