import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleEvent from './SingleEvent/SingleEvent';

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:5000/events')
    fetch('https://young-ridge-25037.herokuapp.com/events')
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <Container>
      <Row>
        {events.map((event) => (
          <SingleEvent key={event._id} event={event}></SingleEvent>
        ))}
      </Row>
    </Container>
  );
};

export default Events;
