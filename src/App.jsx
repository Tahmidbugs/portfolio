import React from 'react'
import About from './components/about/About'
import Clubs from './components/clubs/Clubs'
import Contact from './components/contacts/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Projects/>
    <Clubs/>
    <Contact/>
    <br>
    </br>    
    <br></br>
    <br></br>
    <br></br>
    </>
  )
}

export default App