import React from 'react';
import { Link } from 'react-router-dom';

import './Heder.css';
import logo from '../../img/grafiki/logo_white.png'
import tło from '../../img/background/bg_czaszka.png'


const Header = () => {
    return(
        <>
            <nav className="navbar">
                <div className='navbnar-container'>
                    <Link to='/' className='navbar-logo'>
                        <img src={logo} alt="logo1" />
                    </Link>
                    <Link to='order' className='navbar-order'>
                        Zamów
                    </Link>
                </div>
                <img src={tło} alt='tło' className='navbar-background'/>
            </nav>
        </>   
    )
}

export default Header;



<header>
        <nav>
          <p>Nawigacja</p>
          <img src="" alt="logo" />
          <button></button>
        </nav>
        <img src="../img/background/bg_czaszka.jpg" alt="" />
      </header> 