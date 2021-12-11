import './SideDrawer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
    <div className='SideDrawer'>
        <div>
            <li><NavLink to='/store'>Plus Store</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/brandplus'>Brand Plus</NavLink></li>
            <li><NavLink to='/ola'>About Us</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contacts'>Contacts</NavLink></li>
        </div>
    </div>
