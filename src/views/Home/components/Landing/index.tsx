import React from 'react';
import { LinkButton } from 'components/Button';
import rocketShipArt from 'assets/rocket-ship.svg';
import { LandingContainer, Heading, Description, Art, Content } from './styles';

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
        <LinkButton to="/join">Get Started</LinkButton>
      </Content>
      <Art src={rocketShipArt} alt="Rocket ship" />
    </LandingContainer>
  );
};

export default Landing;
