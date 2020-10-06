import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleEvent.css';

const SingleEvent = (props) => {
  const { title, imageBanner, _id } = props.event;

  const colors = ['#ffbd3e', '#ff7044', '#3f90fc', '#421fcf'];
  function random_item(items) {
    return colors[Math.floor(Math.random() * items.length)];
  }
  const apiURL = 'https://young-ridge-25037.herokuapp.com';
  return (
    <>
      <Col md={6} lg={3}>
        <Link to={`/events/${_id}`}>
          <div className='singleEvnet'>
            <img src={apiURL + imageBanner} alt='' className='event-image' />
            <h3
              className='title'
              style={{
                backgroundColor: `${random_item(colors)}`,
              }}
            >
              {title}
            </h3>
          </div>
        </Link>
      </Col>
    </>
  );
};

export default SingleEvent;
