import React from 'react'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/tahmid-ahmed-72a883212/" ><AiFillLinkedin/></a>
        <a href="https://github.com/tahmidbugs/" ><AiFillGithub/></a>
        <a href="https://www.instagram.com/tahmid_ahmeow/" ><AiFillInstagram/></a>
        
        </div>
  )
}

export default HeaderSocials