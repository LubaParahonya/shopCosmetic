import React from 'react'
import Navigate from '../Navigate/Navigate'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Navigate />
    <Outlet />
    </>
  )
}

export default Layout
