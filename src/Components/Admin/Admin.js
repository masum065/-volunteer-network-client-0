import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AdminHeader from './AdmintHeader/AdminHeader';
import { ReactComponent as IconPpl } from '../../images/icons/ppl.svg';
import { ReactComponent as IconPlus } from '../../images/icons/plus.svg';
import './Admin.css';
import VolunteerList from './VolunteerList/VolunteerList';
import AddEvent from './AddEvent/AddEvent';

const Admin = () => {
  const [volunteerListRoute, setVolunteerListRoute] = useState(true);
  const [eventRoute, setEventRoute] = useState(false);

  return (
    <Container fluid>
      <Row className='admin-header'>
        <AdminHeader />
      </Row>
      <Row>
        <Col className='panel-sidebar-wraper' md={3}>
          <div className='panel-sidebar'>
            <p
              onClick={() => {
                setEventRoute(false);
                setVolunteerListRoute(true);
              }}
              className={volunteerListRoute ? 'active' : ''}
            >
              <IconPpl /> Volunteer register list
            </p>

            <p
              onClick={() => {
                setEventRoute(true);
                setVolunteerListRoute(false);
              }}
              className={eventRoute ? 'active' : ''}
            >
              <IconPlus /> Add Event
            </p>
          </div>
        </Col>
        <Col md={9}>
          {volunteerListRoute && <VolunteerList />}
          {eventRoute && <AddEvent />}
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
