import React from 'react'

import './projects.css'
import UBER from "../../assets/ubereats.png";
import INSTAGRAM from '../../assets/instagram.jpg';
import DISCORD from '../../assets/discord.png';
import HOPELESS from '../../assets/hopeless-less.png';
import DEBUG from '../../assets/DEBUG.png';
import LIGHT from '../../assets/light.png';
const Projects = () => {
  return (
    <section id="projects">
      <h5>Recent grind</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <div className='project__item'>
          <div className='project__item-image'><img src={DEBUG} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Debug this meme</h3>
          <div className="project__item-cta">
          <a href="https://www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="https://www.github.com/tahmidbugs/debugthismeme" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={HOPELESS} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Hopeless-less</h3>
          <div className="project__item-cta">
          <a href="https://www.github.com/tahmidbugs/shellhacks" className='btn' target="_blank">Github</a>
          <a href="https://devpost.com/software/hopeless-less" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={UBER} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Uber Eats Clone</h3>
          <div className="project__item-cta">
          <a href="https://github.com/Tahmidbugs/uber-eats-clone" className='btn' target="_blank">Github</a>
          <a href="https://youtu.be/CdgRMrl30y8" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={INSTAGRAM} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Instagram Clone</h3>
          <div className="project__item-cta">
          <a href="https://github.com/Tahmidbugs/instagram-clone" className='btn' target="_blank">Github</a>
          <a href="https://www.youtube.com/watch?v=WNCpPZj5Qaw&ab_channel=TahmidAhmad" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={DISCORD} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Muzlem Bot</h3>
          <div className="project__item-cta">
          <a href="https://github.com/Tahmidbugs/MuzlemBot" className='btn' target="_blank">Github</a>
          <a href="https://github.com/tahmidbugs/MuzlemBot" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={LIGHT} alt="thumbnail" width="220px" height="240px"/></div>
          <h3>Light and Sound Memory Game</h3>
          <div className="project__item-cta">
          <a href="https://github.com/Tahmidbugs/Light-and-sound-memory-game" className='btn' target="_blank">Github</a>
          <a href="https://github.com/Tahmidbugs/Light-and-sound-memory-game" className='btn btn-primary' target="_blank">Demo</a>
</div>
        </div>
        </div>
    </section>
  )
}

export default Projects