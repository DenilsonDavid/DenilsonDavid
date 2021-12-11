import CloseIcon from '../../assets/images/close black.svg';
import Logo from '../../assets/images/PlusTeck Group - Logo Symbol White.png';
import LogoBlack from '../../assets/images/PlusTec Group-Black Logo.png';
import LoupeIcon from '../../assets/images/loupe.svg';
import './Search.css';
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>  
  <>
    <section className='search bg-light'>
      <div className='navigation'>
        <Link to='/'><img src={CloseIcon} alt='Close' /></Link>
      </div>
      <div className='form'>
          <div className='form-group'>
              <img src={Logo} alt='Back' />
              <input type='text' name='inputSearch' id='inputSearch' placeholder='Pesquisar...' />
              <img src={LoupeIcon} alt='Search' />
          </div>
      </div>
    </section>
    <div className='footer'>
      <h2>Ola, eu sou um h2</h2>
      <Link to='/'><img src={LogoBlack} alt='Plusteck' /></Link>
    </div>
  </>