import React from 'react';
import { Link } from 'react-router-dom';
import siteLogo from '../../../images/logo.png';

const Logo = () => {
  return (
    <Link to='/'>
      <img className='site-logo' src={siteLogo} alt='siteLogo' />
    </Link>
  );
};

export default Logo;
