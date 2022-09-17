import React from 'react'
import Thumbnail from '../../assets/1.jpg'
import './projects.css'
const Projects = () => {
  return (
    <section id="projects">
      <h5>Recent grind</h5>
      <h2>Projects</h2>
      <div className="container project__container">
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Debug this meme</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Hopeless-less</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/shellhacks" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Uber Eats Clone</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Instagram Clone</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Muzlem Bot</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        <div className='project__item'>
          <div className='project__item-image'><img src={Thumbnail} alt="thumbnail"/></div>
          <h3>Light and Sound Memory Game</h3>
          <div className="project__item-cta">
          <a href="www.github.com/tahmidbugs/debugthismeme" className='btn' target="_blank">Github</a>
          <a href="" className='btn btn-primary' target="_blank">Live Demo</a>
</div>
        </div>
        </div>
    </section>
  )
}

export default Projects