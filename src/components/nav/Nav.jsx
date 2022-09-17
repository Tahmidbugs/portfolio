import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {GrWorkshop} from 'react-icons/gr'
import {MdOutlineLeaderboard} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [active, setActive] = useState('#')
  return (
   <nav>
    <a href="#" onClick={()=>setActive('#')} className={active==='#'?'active':''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=>setActive('#about')}className={active==='#about'?'active':''}><AiOutlineUser/></a>
    <a href="#experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><BiBook/></a>
    <a href="#projects" onClick={()=>setActive('#projects')} className={active==='#projects'?'active':''}><RiServiceLine/></a>
    <a href="#clubs" onClick={()=>setActive('#clubs')} className={active==='#clubs'?'active':''}><MdOutlineLeaderboard/></a>
    <a href="#contact" onClick={()=>setActive('#contact')}className={active==='#contact'?'active':''}><BiMessageSquareDetail/></a>
   </nav>
  )
}

export default Nav