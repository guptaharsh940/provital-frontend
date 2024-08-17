import React, { useState } from 'react'
import "../scss/HamburgerMenu.scss"
import LoginMenu from './LoginMenu';

const HamburgerMenu = () => {
    

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
            <div className='hamburger-menu'>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>Doctors <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg>
                    </button>
                </div>
                <div className='horizontalline'></div>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>List Your practice <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg></button>
                </div>
                <div className='horizontalline'></div>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>For Employers <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg></button>
                </div>
                <div className='horizontalline'></div>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>Course <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg></button>
                </div>
                <div className='horizontalline'></div>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>Books <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg></button>
                </div>
                <div className='horizontalline'></div>
                <div className='hamburger-menu-option'>
                    <button className='hamburger-buttons'>Speakers <svg className='hamburger-svg' width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.80732 13.0675C8.74921 13.0095 8.70311 12.9406 8.67166 12.8647C8.64021 12.7888 8.62402 12.7075 8.62402 12.6253C8.62402 12.5432 8.64021 12.4619 8.67166 12.386C8.70311 12.3101 8.74921 12.2412 8.80732 12.1832L13.3659 7.62535L1.12451 7.62535C0.958748 7.62535 0.799777 7.5595 0.682566 7.44229C0.565356 7.32508 0.499509 7.16611 0.499509 7.00035C0.499509 6.83459 0.565356 6.67562 0.682566 6.55841C0.799777 6.4412 0.958748 6.37535 1.12451 6.37535L13.3659 6.37535L8.80732 1.81753C8.69005 1.70026 8.62416 1.5412 8.62416 1.37535C8.62416 1.20949 8.69005 1.05044 8.80732 0.93316C8.9246 0.815884 9.08366 0.75 9.24951 0.75C9.41536 0.75 9.57442 0.815884 9.6917 0.93316L15.3167 6.55816C15.3748 6.61621 15.4209 6.68514 15.4524 6.76101C15.4838 6.83688 15.5 6.91821 15.5 7.00035C15.5 7.08248 15.4838 7.16381 15.4524 7.23969C15.4209 7.31556 15.3748 7.38449 15.3167 7.44254L9.6917 13.0675C9.63365 13.1256 9.56472 13.1717 9.48885 13.2032C9.41297 13.2347 9.33164 13.2508 9.24951 13.2508C9.16737 13.2508 9.08604 13.2347 9.01017 13.2032C8.9343 13.1717 8.86537 13.1256 8.80732 13.0675Z" fill="#707070" />
                    </svg></button>
                </div>
                <div className='horizontalline'></div>

            </div>
        </div>
    )
}

export default HamburgerMenu