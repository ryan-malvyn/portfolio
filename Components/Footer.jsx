import React from 'react'
import { SiGithub, SiFacebook, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer-container'>
      <ul className='footer-list'>
        <div className='social-media-card-container'>
          <li className='social-media-item'>
            <a href='https://github.com/ryan-malvyn' target='_blank'>
              <SiGithub className='footer-icon' />
            </a>
          </li>
        </div>
        <div className='social-media-card-container'>
        <li className='social-media-item'>
            <a href='https://www.instagram.com/ryanmalvyn/' target='_blank'>
              <SiInstagram className='footer-icon' />
            </a>
        </li>
        </div>
        <div className='social-media-card-container'>
        <li className='social-media-item'>
            <a href='https://www.linkedin.com/in/ryan-malvyn-1a5b73170/' target='_blank'>
              <SiLinkedin className='footer-icon' />
            </a>
        </li>
        </div>
        <div className='social-media-card-container'>
        <li className='social-media-item'>
            <a href='https://www.facebook.com/ryan.malvyn.35' target='_blank'>
              <SiFacebook className='footer-icon' />
            </a>
        </li>
        </div>
        <div className='social-media-card-container'>
        <li className='social-media-item'>
            <a href='https://twitter.com/imyungyung' target='_blank'>
              <SiTwitter className='footer-icon' />
            </a>
        </li>
        </div>
      </ul>
      <div className='footer-content'>
        <div className='footer-logo1'>
          <img src='/whiteLogo.png' className='footer-logo' />
        </div>
        <p>
          Copyright 2022 Ryan Malvyn
        </p>
      </div>
    </div>
  )
}

export default Footer