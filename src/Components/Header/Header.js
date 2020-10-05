import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Header.css';
import Logo from './Logo/Logo';
import MainMenu from './MainMenu/MainMenu';

const Header = () => {
  return (
    <Container>
      <Row>
        <Col className='my-4' md={4}>
          <Logo />
        </Col>
        <Col className='my-4' md={8}>
          <MainMenu />
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
