import React from 'react'
import Banner from '../home/homeComponents/Banner'
import NavBar from '../home/homeComponents/NavBar'

const Header = () => {
  return (
    <header className="header" id="header">
    <NavBar/>
    <Banner/>
  </header>
  )
}

export default Header;