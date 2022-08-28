import React from 'react'
import Comunidades from './footerComponents/Comunidades'
import Icons from './footerComponents/Icons'
import Information from './footerComponents/Information'
import LinksUteis from './footerComponents/LinksUteis'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="row">
        <Information/>
        <LinksUteis/>
        <Comunidades/>
        <Icons/>
      </div>
    </footer>
  )
}

export default Footer;