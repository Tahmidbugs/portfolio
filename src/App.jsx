import React from 'react'
import About from './components/about/About'
import Clubs from './components/clubs/Clubs'
import Contact from './components/contacts/Contact'
import Experience from './components/experience/Experience'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Projects from './components/projects/Projects'
import ReactSwitch from 'react-switch';
import { createContext } from 'react'

export const ThemeContext = createContext(null)

const App = () => {
  const [theme, setTheme] = React.useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}} >
      <div className={theme}>
 
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
    </div>
    </ThemeContext.Provider> 
  )
}

export default App