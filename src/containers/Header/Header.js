import React from 'react';
import { Link } from 'react-router-dom';

import './Heder.css';
// import logo from '../../images/grafiki/logo_white.png'
// import tło from '../../img/background/bg_czaszka.png'


const Header = () => {
    return(
        <>
            <nav className="navbar">
                <div className='navbnar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src='/images/grafiki/logo_white.png' alt="logo1" />
                    </Link>
                    <Link to='order' className='navbar-order'>
                        Zamów
                    </Link>
                </div>
                <img src='/images/background/bg_czaszka.jpg' alt='tło' className='navbar-background'/>
            </nav>
        </>   
    )
}

export default Header;