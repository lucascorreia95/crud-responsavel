import React from 'react';

import './style.css';

import Logo from '../../assets/images/logo.png';

const Header = function Header({ title }) {
    return(
        <div className='header'>
            <div className='header__container container'>
                <figure className='header__logo'>
                    <img src ={Logo} alt='Logo' />
                </figure>
                <div className='header__title'>
                    <span>{title}</span>
                </div>
            </div>
        </div>
    );
};

export default Header;
