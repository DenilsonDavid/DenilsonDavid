import CloseIcon from '../../assets/images/close black.svg';
// import NextArrowIcon from '../../assets/images/close.svg';
import './Order.css';
import React from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../../components/Navigation/BackDrop/BackDrop';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  <>
    <BackDrop />
    <section className='form-section bg-light'>
      <div className='navigation'>
        <Link to='/'><img src={CloseIcon} alt='Back' /></Link>
      </div>
      <div className='form'>
        <h2 className='pls-md-ios-title'>Alguns<br/>dados seus<br/>Por favor.</h2>
        <p>Precisamos deles para<br/>a resposta.</p>
        <h2 className='pls-desktop-title'>Seus<br/>Dados</h2>
          <div className='form-group'>
              <label for='inputNome'>Nome</label>
              <input type='text' name='inputNome' id='inputNome' />
          </div>
          <div className='form-group'>
              <label for='inputEmpresa'>Empresa (<span>Opcional</span>)</label>
              <input type='text' name='inputEmpresa' id='inputEmpresa' />
          </div>
          <div className='form-group'>
              <label for='inputEmail'>E-mail</label>
              <input type='email' name='inputEmail' id='inputEmail' />
          </div>
          <div className='call-to-action'>
              <Link to='/feedback'>Enviar<img src={CloseIcon} alt='Back' /></Link>
          </div>
      </div>
    </section>
  </>