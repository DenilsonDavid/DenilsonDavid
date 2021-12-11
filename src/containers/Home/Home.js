import NextArrowIcon from '../../assets/images/Next.svg';
import './Home.css';
import React from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  <>
    <Navigation />
    <section className='hero-section'>
      <h1 className='title'>Como<br/>podemos<br/>ajudar hoje?</h1>
      <div className='order'>
        <h2>Eu preciso de:</h2>
        <select name='jobInput' id='jobInput'>
          <option value='website'>um Website</option>
          <option value='lojavirtual'>Loja Virtual</option>
          <option value='email'>Email corporativo</option>
          <option value='hospedagem'>Hospedar um Website</option>
        </select>
      </div>
      <div className='call-to-action'>
        <NavLink to='/order'>Consultar <img src={NextArrowIcon} alt='Consultar' /></NavLink>
      </div>
    </section>
  </>