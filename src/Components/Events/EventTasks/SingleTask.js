import React from 'react';
import { Col } from 'react-bootstrap';

const SingleTask = (props) => {
  const { imageBanner, event, date, _id } = props.task;
  return (
    <Col md={6}>
      <div className='single-task'>
        <div className='task-image'>
          <img src={imageBanner} alt='' />
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
