// Outlet: should be use in parent route elements to render their child route elements.
// This allows nested UI to show up when child routes are rendered.
// If the parent route matches exactly, it will render a child index route or nothing if there is no index route.

import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

