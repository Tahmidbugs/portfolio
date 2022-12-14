import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>What I'm good at</h2>

      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Technologies</h3>
          <div className='experience__content'>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>C++</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Python</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>C</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Javascript</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>React</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>React Native</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Firebase</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Node JS</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>Express JS</h4>
            </article>
            <article className='experience__details'>
                <BsPatchCheckFill className="experience__details-icon"/>
                <h4>mySQL</h4>
            </article>
          </div>
       

        </div>
      </div>
    </section>
  )
}

export default Experience