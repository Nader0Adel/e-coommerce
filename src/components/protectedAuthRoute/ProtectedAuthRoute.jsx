import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Navigate,  } from 'react-router-dom'
import Home from '../home/Home'

export default function ProtectedAuthRoute({children}) {
    

    const {userToken} = useContext(AuthContext)

  return <>
  {
    !userToken ? children : <Navigate to={"/"}/>
  }
  </>
}
