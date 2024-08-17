import React, { useState } from 'react'
import "../scss/HamburgerMenu.scss"
import LoginMenu from './LoginMenu';

const HamburgerMenu = () => {
    document.body.style.overflow = 'hidden';

  return (
    <div className='menu'>
         <div className='login-menu-hamburger' >
            <div className='login-menu-option'>
                <p className='login-menu-title font-hamburger'>Doctor</p>
                <div className='login-menu-link-container'>
                <button className='login-menu-link font-hamburger'>Login</button>
                <button className='login-menu-link font-hamburger'>Sign up</button>
                </div>
            </div>
            <div className='login-menu-line'></div>
            <div className='login-menu-option'>
                <p className='login-menu-title font-hamburger'>Patients</p>
                <div className='login-menu-link-container'>
                <button className='login-menu-link font-hamburger'>Login</button>
                <button className='login-menu-link font-hamburger'>Sign up</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HamburgerMenu