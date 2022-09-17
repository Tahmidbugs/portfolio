import React from 'react'
import CTA from './CTA'
import Picture from "../../assets/s.png"
import './header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tahmid Ahmed</h1>
        <h5 className="text-light">Learning Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me"><img src={Picture} alt="ok" className='pfp'/></div>
    
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header