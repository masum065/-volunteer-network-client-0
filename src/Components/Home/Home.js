import React from 'react';
import Header from '../Header/Header';
import heroImage from '../../images/hero.jpg';
import './Home.css';
import Search from '../Search/Search';
import Events from '../Events/Events';

const Home = () => {
  const heroStyle = {
    background: `url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
  };

  return (
    <>
      <section className='heroImage' style={heroStyle}>
        <Header />
        <div className='hero-heading'>
          <h1>I grow by helping people in need.</h1>
        </div>
        <Search />
      </section>

      <section className='events-wrapper'>
        <Events />
      </section>
    </>
  );
};

export default Home;
