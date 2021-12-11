import Logo from '../../assets/images/PlusTec Group-Black Logo.png';
import CloseIcon from '../../assets/images/close black.svg';
import './Feedback.css';import './Feedback.css';
import React from 'react';
import { Link } from 'react-router-dom';
import BackDrop from '../../components/Navigation/BackDrop/BackDrop';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>  
  <>
    <BackDrop />
    <section className='feedback bg-light'>
      <div className='navigation'>
        <Link to='/'><img src={CloseIcon} alt='Close' /></Link>
      </div>
      {/* <div className='_blank'></div> */}
      <div className='text'>
        <div>
          <h2 className='pls-md-ios'>Obrigado!</h2>
          <h2 className='pls-desktop'>Obriga<br/><span>do</span></h2>
          <p className='pls-desktop'>Prometemos responder<br/>O mais rapido possivel</p>
          <p className='pls-md-ios'>Entraremos em contacto o mais breve possivel.</p>
          {/* <ul>
            <label>Enquanto isso, por favor</label>
            <li>Beba agua para se hidratar</li>
            <li>Use a mascara</li>
            <li>Pratique o destanciamento social</li>
          </ul> */}
        </div>
      </div>
      <div className='footer'>
        <Link to='/'><img src={Logo} alt='Plusteck' /></Link>
      </div>
    </section>
  </>