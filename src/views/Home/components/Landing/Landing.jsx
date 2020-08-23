// @flow
import React from 'react';
import Button from 'components/Button';
import rocketShipArt from 'assets/rocket-ship.svg';
import { LandingContainer, Heading, Description, Art, Content } from './styles';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <LandingContainer>
      <Content>
        <Heading>Embark on an adventure for virtual events.</Heading>
        <Description>
          Eventure is a digital platform designed to help people discover and
          host virtual events, all without the hassle of the things that come
          with in-person events.
        </Description>
        <Button to="/join">Get Started</Button>
      </Content>
      <Art src={rocketShipArt} alt="Rocket ship" />
    </LandingContainer>
  );
};

export default Landing;
