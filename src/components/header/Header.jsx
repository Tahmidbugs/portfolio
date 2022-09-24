import React from 'react'
import CTA from './CTA'
import Picture from "../../assets/s.png"
import './header.css'
import {useState, useEffect} from 'react'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  const toRotate = ["Web Developer", "Software Developer", "Junior at USF", "Programmer", "TA for Program Design at USF","Mobile Application developer", "Learner", "Cat Lover"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
 
  useEffect(() => {
    let ticker = setInterval(() => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
      } else {
        setText(fullText.substring(0, text.length + 1));
      }

      setDelta(150 - Math.random() * 100);

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setDelta(1000);
      }
    }, delta);
    return () => {
      clearInterval(ticker);
    }
  }, [loopNum, isDeleting, text, delta, toRotate]);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Tahmid Ahmed</h1>
        {text===""? <h5 className='text-invisible'>what</h5>:<h5 className='text-light'>{text}</h5>}
       
        <CTA/>
        <HeaderSocials/>
        <div className="me"><img src={Picture} alt="ok" className='pfp'/></div>
    
        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header