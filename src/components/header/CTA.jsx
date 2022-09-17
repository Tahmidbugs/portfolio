import React from 'react'
import Resume from '../../assets/TahmidResume.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={Resume} className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's chat</a>
    
    </div>
  )
}

export default CTA