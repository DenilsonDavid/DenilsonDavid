import Logo from '../../assets/images/PlusTeck Group White Logo.png';
import CloseIcon from '../../assets/images/close.svg';
import './Modal.css';
import React from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../Navigation/BackDrop/BackDrop';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>  
  <>
    <BackDrop />
    <section className='modal'>
      <div className='navigation'>
        <Link to='/'><img src={CloseIcon} alt='Close' /></Link>
      </div>
      <div className='text'>
        <div className='pls-md-ios'>
          <h4>Ola!<br/>Estamos a trabalhar nesta area tambem e so estara pronta em:</h4>
          <b>15 Dias {'&'}<br/> 5 : 20<br/></b>
        </div>
        <Link to='/'>Fazer uma quick Consultoria</Link>
        <div className='pls-desktop'>
            <label>15 - <span>dias</span></label>
            <label> 5<span>horas</span></label>
            <label>:20<span>minutos</span></label>
        </div>
      </div>
      <div className='footer'>
        <Link to='/'><img src={Logo} alt='Plusteck' /></Link>
      </div>
    </section>
  </>