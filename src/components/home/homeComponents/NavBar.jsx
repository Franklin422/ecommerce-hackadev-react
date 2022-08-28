import React from 'react'
import Icons from './Icons'
import Logo from './navBarComonents/Logo'
import MenuHamburger from './navBarComonents/MenuHamburger'
import NavContato from './navBarComonents/NavContato'
import NavInicio from './navBarComonents/NavInicio'
import NavProdutos from './navBarComonents/NavProdutos'
import NavSobre from './navBarComonents/NavSobre'
import NavTermos from './navBarComonents/NavTermos'

const NavBar = () => {
  return (
    <div className="navigation">
      <div className="nav-center container d-flex">
        <Logo/>
        <ul className="nav-list d-flex">
          <NavInicio/>
          <NavProdutos/>
          <NavSobre/>
          <NavContato/>
          <NavTermos/>
        </ul>
        <Icons/>
        <MenuHamburger/>
      </div>
    </div>
  )
}

export default NavBar
