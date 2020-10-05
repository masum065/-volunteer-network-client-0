import React, { useContext, useEffect, useState } from 'react';
import SingleTask from './SingleTask';
import './EventTask.css';
import { Container, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Header from '../../Header/Header';

const EventTasks = () => {
  const [loggedInUser] = useContext(UserContext);
  const [tasks, setTasks] = useState([]);
  const [detete, setDelete] = useState({});
  const apiURL = 'https://young-ridge-25037.herokuapp.com';

  const handleDeleteTask = (id) => {
    fetch(`${apiURL}/registers/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        setDelete(data);
      });
  };

  useEffect(() => {
    fetch(`${apiURL}/tasks?email=${loggedInUser.email}`)
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, [loggedInUser.email, detete]);

  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <Row className='mt-4'>
        {tasks.map((task) => (
          <SingleTask onClick={handleDeleteTask} key={task._id} task={task} />
        ))}
      </Row>
    </Container>
  );
};

export default EventTasks;
