import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import Logo from '../Header/Logo/Logo';
import './RegVoluteer.css';

const RegVoluteer = () => {
  const [loggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const eventId = urlPath.slice(-1).pop();

  const [regEvent, setRegEvent] = useState({});

  const apiURL = 'https://young-ridge-25037.herokuapp.com';
  useEffect(() => {
    fetch(`${apiURL}/event/${eventId}`)
      .then((response) => response.json())
      .then((data) => setRegEvent(data));
  }, [eventId]);

  const { title, date, description, imageBanner } = regEvent;
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newRegEvent = { ...data, imageBanner: imageBanner, role: 'user' };

    fetch(`${apiURL}/eventregister`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newRegEvent),
    })
      .then((response) => response.json())
      .then((data) => {
        history.push(`/events`);
      });
  };
  return (
    <div>
      <Container>
        <Row className='justify-content-center text-center'>
          <Col className='mt-4' md={4}>
            <Logo />
          </Col>
        </Row>
        <Row className='justify-content-center'>
          <Col md={6}>
            <div className='volunteer-form'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className='title'>Register as a Volunteer</h3>
                <Row>
                  <Col sm={12}>
                    <input
                      type='text'
                      name='name'
                      placeholder='Full Name'
                      ref={register}
                      defaultValue={loggedInUser.name}
                    />
                  </Col>
                  <Col sm={12}>
                    <input
                      type='email'
                      name='email'
                      placeholder='Username or Email'
                      ref={register}
                      defaultValue={loggedInUser.email}
                      readOnly={true}
                    />
                  </Col>
                  <Col sm={12}>
                    <input
                      type='date'
                      name='date'
                      placeholder='Date'
                      ref={register}
                      defaultValue={date}
                    />
                  </Col>
                  <Col sm={12}>
                    <input
                      type='text'
                      name='desicription'
                      placeholder='Desicription'
                      defaultValue={description}
                      ref={register}
                    />
                  </Col>
                  <Col sm={12}>
                    <input
                      type='text'
                      name='event'
                      placeholder='Event Title'
                      ref={register}
                      defaultValue={title}
                      readOnly={true}
                    />
                  </Col>

                  <input
                    className='btn btn-primary'
                    type='submit'
                    value='Registration'
                  />
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RegVoluteer;
