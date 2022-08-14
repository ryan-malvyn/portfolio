import React from 'react'
import { SiReact, SiHtml5, SiCss3, SiJavascript, SiNextdotjs, SiRedux, SiJava } from 'react-icons/si'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { HiOutlineArrowRight } from 'react-icons/hi'

const Projects = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInLeft' animateOut='animate__fadeOutLeft'>
      <section className='projects-container'>
        <div className='projects-title'>
            <h1 id='projects-title'>PROJECTS : </h1>
        </div>


        <div className='projects-grid' id='projects'>

          <div className='project'>
            <img src='/gpt3.png' />
            <div className='pop-up-div'>
              <h3>React Responsive Website</h3>
              <div className='project-desc'>
                <p className='caption'>A fully responsive website built with React JS.
                  I built this project to teach myself about React's basics
                  and component life cycle.
                </p>
                <div className='projects-icon'>
                  <SiReact className='React tech-icon' />
                  <SiCss3 className='CSS tech-icon' />
                </div>
                <button className='jump-to-project'>
                  <a href='https://ryan-malvyn.github.io/gpt3-reactPractice-ResponsiveWebsite/' target='_blank'>
                    <HiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>


            <div className='project'>
              <img src='expensetracker.png' />
              <div className='pop-up-div'>
                <h3>Expense Tracker</h3>
                <div className='project-desc'>
                  <p className='caption'>
                    Expense Tracker, built with HTML, CSS, and Vanilla Javascript.
                    I built this project to teach myself and improve my JS Logical
                    capabilities.
                  </p>
                  <div className='projects-icon'>
                    <SiHtml5 className='HTML tech-icon' />
                    <SiCss3 className='CSS tech-icon' />
                    <SiJavascript className='JS tech-icon' />
                  </div>
                  <button className='jump-to-project'>
                    <a href='https://expense-tracker-iota-rouge.vercel.app' target='_blank'>
                    <HiOutlineArrowRight />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          
          <div className='project'>
            <img src='ecom-sanity-stripe.png' />
            <div className='pop-up-div'>
              <h3>Sanity & Stripe Ecommerce</h3>
              <div className='project-desc'>
                <p className='caption'>One of the projects i am most proud of.
                This is an app built with Next JS, with Sanity (BaaS) as a Headless CMS
                and Stripe as a payment platform.</p>
                <div className='projects-icon'>
                  <SiNextdotjs className='Next tech-icon' />
                  <SiCss3 className='CSS tech-icon' />
                </div>
                  <button className='jump-to-project'>
                    <a href='https://sanity-stripe-ecommerce.vercel.app' target='_blank'>
                    <HiOutlineArrowRight />
                    </a>
                  </button>
              </div>
            </div>
          </div>
          <div className='project'>
            <img src='/calculator.png' />
            <div className='pop-up-div'>
              <h3>Calculator</h3>
              <div className='project-desc'>
                <p className='caption'>
                  I've built 2 calculators. One with React, and one with Vanilla JS.
                  I've built two of them because i believe that i can learn about
                  how Redux works.
                </p>
                <div className='projects-icon'>
                  <SiHtml5 className='HTML tech-icon' />
                  <SiCss3 className='CSS tech-icon' />
                  <SiJavascript className='JS tech-icon' />
                  <SiReact className='React tech-icon' />
                  <SiRedux className='Redux tech-icon' />
                </div>
                <button className='jump-to-project'>
                  <a href='https://calculator-app-pied-eta.vercel.app/' target='_blank'>
                  <HiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='project'>
            <img src='weatherapp.png' />
            <div className='pop-up-div'>
              <h3>Weather App</h3>
              <div className='project-desc'>
                <p className='caption'>
                  A JS Weather App that lets you choose if you want to 
                  use Celcius or Fahrenheit to display the temperature
                  of any city. API is from Openweathermap.
                </p>
                <div className='projects-icon'>
                  <SiHtml5 className='HTML tech-icon' />
                  <SiCss3 className='CSS tech-icon' />
                  <SiJavascript className='JS tech-icon' />
                </div>
                <button className='jump-to-project'>
                  <a href='https://js-weather-app-snowy.vercel.app/' target='_blank'>
                  <HiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className='project'>
            <img src='/quizapp.png' />
            <div className='pop-up-div'>
              <h3>Quiz App</h3>
              <div className='project-desc'>
                <p className='caption'>
                  A Quiz app written in React, to learn more on using
                  React Hooks (useEffect) and fetching APIs with React.
                  I have built and installed a fake Database here.
                </p>
                <div className='projects-icon'>
                  <SiReact className='React tech-icon' />
                  <SiCss3 className='CSS tech-icon' />
                </div>
                <button className='jump-to-project'>
                  <a href='https://react-quizapp-delta.vercel.app/' target='_blank'>
                  <HiOutlineArrowRight />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationOnScroll>
  )
}

export default Projects