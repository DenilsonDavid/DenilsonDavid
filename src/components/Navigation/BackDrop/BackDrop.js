import CloseIcon from '../../../assets/images/close.svg';
import LoupeIcon from '../../../assets/images/loupe.svg';
import BagIcon from '../../../assets/images/bag.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
    <nav className='nav navbar backdrop-nav'>
        <div className='closeIcon'>
            <NavLink to='/'><img src={CloseIcon} alt='Plusteck Logo' /></NavLink>
        </div>
        <ul>
            <li><NavLink to='/search'><img src={LoupeIcon} alt='Search' /></NavLink></li>
            <li><NavLink to='/cart'><img src={BagIcon} alt='Cart' /></NavLink></li>
        </ul>
    </nav>
