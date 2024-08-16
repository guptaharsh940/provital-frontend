import React from 'react'
import '../scss/LoginMenu.scss'
type loginMenuProp={
    setLoginMenu:React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginMenu:React.FC<loginMenuProp> = ({setLoginMenu}) => {
    return (
        <div className='login-menu' onMouseEnter={(e)=>{setLoginMenu(true)}} onMouseLeave={(e)=>{setLoginMenu(false)}}>
            <div className='login-menu-option'>
                <p className='login-menu-title'>Doctor</p>
                <div className='login-menu-link-container'>
                <button className='login-menu-link'>Login</button>
                <button className='login-menu-link'>Sign up</button>
                </div>
            </div>
            <div className='login-menu-line'></div>
            <div className='login-menu-option'>
                <p className='login-menu-title'>Patients</p>
                <div className='login-menu-link-container'>
                <button className='login-menu-link'>Login</button>
                <button className='login-menu-link'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default LoginMenu