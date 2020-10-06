import React from 'react';
import { Col } from 'react-bootstrap';

const SingleTask = (props) => {
  const { imageBanner, event, date, _id } = props.task;
  const apiURL = 'https://young-ridge-25037.herokuapp.com';

  return (
    <Col md={6}>
      <div className='single-task'>
        <div className='task-image'>
          <img src={apiURL + imageBanner} alt='' />
        </div>
        <div className='task-content'>
          <h3>{event}</h3>
          <p className='date'>{date}</p>
          <button
            onClick={() => props.onClick(_id)}
            className='btn btn-secondary'
          >
            Cancel
          </button>
        </div>
      </div>
    </Col>
  );
};

export default SingleTask;
