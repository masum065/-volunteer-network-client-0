import React from 'react';
import { Link } from 'react-router-dom';
import image404 from '../../images/404.png';

const NotFound = () => {
  const btnSet = {
    position: 'absolute',
    bottom: '4%',
    left: '50%',
    transform: 'translateX(-50%)',
  };
  const styleBtn = {
    background: '#000',
    padding: '10px 40px',
  };

  return (
    <div
      style={{
        background: `url(${image404})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <div style={btnSet}>
        <Link to='/'>
          <button style={styleBtn} className='btn btn-dark'>
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
