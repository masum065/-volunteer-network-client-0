import React from 'react';
import { Col } from 'react-bootstrap';
import Logo from '../../Header/Logo/Logo';

const AdminHeader = (props) => {
  return (
    <>
      <Col md={3}>
        <Logo />
      </Col>
      <Col md={6}>
        <h3 className='admin-panel-title'>{props.sectionTitle}</h3>
      </Col>
    </>
  );
};

export default AdminHeader;
