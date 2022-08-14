import React, {useState} from 'react'
import { BiMoon } from 'react-icons/bi'
import { FiSend } from 'react-icons/fi'
import Link from 'next/link'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar-container'>
      <div className='logo'>
        <img src='/myLogo.png' id='navbar-logo'/>
      </div>
      <ul className='navbar-links-list'>
        <li className='list-item homebtn'>
          <Link href='#home'><a href='/'>Home</a></Link>
        </li>
        <li className='list-item projects'>
          <Link href='#projects'>Projects</Link>
        </li>
        <li className='list-item'>
          <Link href='#letsTalk'>
          <button type='button' className='btn-primary'>
            <FiSend />
            Let's Talk
            </button>
          </Link>
        </li>
      </ul>
      <div className='navbar-links-mobilemenu'>
        {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)} />
        : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-mobile-menu-container'>
            <div className='mobile-home slide-left'>
              <Link href='#home' className='mobile-link'>
                <a className='mobile-link'>
                  Home
                </a>
              </Link>
              <Link href='#projects' >
                <a className='mobile-link'>
                  Projects
                </a>
              </Link>
              <Link href='#letsTalk' >
                <button type='button' className='mobile-button'>
                  <FiSend />
                  Let's Talk.
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar