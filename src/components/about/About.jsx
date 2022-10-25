import React from 'react'
import './about.css'
import PFP from '../../assets/t.jpeg'
import {FaAward} from 'react-icons/fa'
import {TbBooks} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
   <section id="about">
    <h5>Know more</h5>
    <h2>About me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={PFP} alt="" className='pfpi'/>
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          
        <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>TA, Program Design, USF </small>
            
          </article>
          <article className='about__card'>
          <TbBooks className='about__icon'/>
            <h5>Education</h5>
            <small>Junior, CS, USF </small>
            
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>Web App, Mobile App and more</small>
          </article>
        </div>
        <p>
          Hello there! My name is Tahmid and I like cats...Now that we are done with the important bit, I am a Junior at the University of South Florida majoring in Computer Science. I am currently the TA for Program Design. I starve for new knowledge in the realm of programming and I am currently on the lookout for summer internships.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Chat</a>
      </div>
    </div>
   </section>
  )
}

export default About