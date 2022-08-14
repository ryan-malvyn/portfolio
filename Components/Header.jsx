import React from 'react'
import { SiReact, SiGit, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiRedux } from 'react-icons/si';
import { MdLocationOn } from 'react-icons/md'
import { useTypewriter } from 'react-simple-typewriter';
import 'animate.css';

const Header = () => {

  const {text} = useTypewriter({
    words: ["I'm a Front End Web Developer"],
    loop: 0,
    cursor:true,
    typeSpeed:70,
    deleteSpeed:50,
    delaySpeed:1000,
    cursorStyle:'|' // Infinit
  })

  return (
    <div className='header-container' id='home'>
        <div className='text-content animate__animated animate__fadeInLeft'>
          <h1 className='greetings'>
          👋🏼 Hi! I'm Ryan, <br /> </h1>
          <h1 className='hello'> Nice to Meet You!
          </h1>
          <span className='paragraph line1'>{text}</span>
        </div>
      <div className='profile-card animate__animated animate__fadeInRight'>
        <div className='photo'>
          <img src='photoDark.jpg' id='profileDark'/>
        </div>
        <div className='card-info-areas'>
          <div className='name-age info'>
            Ryan Malvyn, 22 Years Old
          </div>
          <div className='occupation info'>
            Front-End Developer
          </div>
          <div className='tech-stack info'>
            <SiHtml5 className='HTML tech-icon' />
            <SiCss3 className='CSS tech-icon' />
            <SiGit className='Git tech-icon' />
            <SiJavascript className='JS tech-icon' />
            <SiReact className='React tech-icon' />
            <SiRedux className='Redux tech-icon' />
            <SiNextdotjs className='Next tech-icon' />
          </div>
          <div className='location info'>
            <MdLocationOn className='locationPin' />
            Taiwan <span id='flag'>🇹🇼</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header