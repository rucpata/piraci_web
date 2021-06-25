import React from 'react';
import { Link } from 'react-scroll';

import './Heder.scss';
// import logo from '../../images/grafiki/logo_white.png'
// import tło from '../../img/background/bg_czaszka.png'


const Header = () => {
    return(
        <>
            <nav className="navbar" id='navbar'>
                <div className='navbnar-container'>                   
                    <Link  activeClass="active" to="navbar" spy={true} smooth={true}>
                        <img className='navbar-logo' src='/images/grafiki/logo_white.png' alt="logo1" />
                    </Link>
                    <Link  activeClass="active" to="orderForm" spy={true} smooth={true}>
                        <button href='/#orderForm'className='navbar-order'>
                            Zamów
                        </button>
                    </Link>
                </div>
                <div>
                    
                </div>
                <img src='/images/background/bg_czaszka.png' alt='tło' className='navbar-background'/>

            </nav>
        </>   
    )
}

export default Header;