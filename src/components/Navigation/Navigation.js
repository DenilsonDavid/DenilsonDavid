/* eslint-disable import/no-anonymous-default-export */
import Logo from '../../assets/images/PlusTeck Group - Logo Symbol White.png';
import LoupeIcon from '../../assets/images/loupe.svg';
import BagIcon from '../../assets/images/bag.svg';
import './Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import SideDrawer from './SideDrawer/SideDrawer';

export default () => (
  <>
    <nav className='nav navbar'>
      <div>
        <NavLink to='/'><img src={Logo} alt='Plusteck Logo' /></NavLink>
        <ul>
          <li><NavLink to='/' exact>Home</NavLink></li>
          <li><NavLink to='/services'>Services</NavLink></li>
          <li><NavLink to='/brandplus'>Brand Plus</NavLink></li>
          <li><NavLink to='/store'>Store</NavLink></li>
          <li><NavLink to='/ola'>Ola!</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
          <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </ul>
      </div>
        <ul>
          <li><NavLink to='/search'><img src={LoupeIcon} alt='Search' /></NavLink></li>
          <li><NavLink to='/cart'><img src={BagIcon} alt='Cart' /></NavLink></li>
          <input type='checkbox' name='sideDrawerToggler' id='sideDrawerToggler' className='sideDrawerToggler' />
          <label for='sideDrawerToggler' className='sideDrawerIcon'><ion-icon name='menu-outline'></ion-icon>Menu</label>
          {/* <div> */}
            <SideDrawer />
          {/* </div> */}
        </ul>
    </nav>
  </>
);