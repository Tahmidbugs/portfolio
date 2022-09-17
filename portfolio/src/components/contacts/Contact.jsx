import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import{BsWhatsapp} from 'react-icons/bs'

import emailjs from 'emailjs-com';
const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm ('service_b88h2lx', 'template_tal2btj', e.target, 'RySt4B4HgAoNBEL2-')
    e.target.reset();
  }

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
             <h4>Email</h4>
            <h5>tahmidahmed1@usf.edu</h5>
            <a href='mailto:tahmidahmed1@usf.edu' target="_blank">Send an email</a>
          </article>
      <article className='contact__option'>
        <RiMessengerLine className='contact__option-icon'/>
        <h4>Messenger</h4>
        <h5>Tahmid Ahmed</h5>
        <a href="https://m.me/tahmidahmed.22/" target="_blank">Send a message</a>
      </article>
      <article className='contact__option'>
        <BsWhatsapp className='contact__option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+18137293351</h5>
        <a href="https://wa.me/18137293351" target="_blank">Shoot a text</a>
      </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your full name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your message' required></textarea>
          <button className='btn btn-primary' type='submit'>Send Message</button>
        </form>
        </div>
    </section>
  )
}

export default Contact