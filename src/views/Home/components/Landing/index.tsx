import React from 'react';
import Row from 'react-bootstrap/Row';
import { LinkButton } from 'components/Button';
import rocketShipArt from 'assets/rocket-ship.svg';
import {
  LandingSection,
  Heading,
  Description,
  Art,
  ContentCol,
  ArtCol,
} from './styles';

const Landing = () => {
  return (
    <LandingSection>
      <Row className="justify-content-between" noGutters>
        <ContentCol lg="auto">
          <Heading>Embark on an adventure for virtual events.</Heading>
          <Description>
            Eventure is a digital platform designed to help people discover and
            host virtual events, all without the hassle of the things that come
            with in-person events.
          </Description>
          <LinkButton to="/join">Get Started</LinkButton>
        </ContentCol>
        <ArtCol lg>
          <Art src={rocketShipArt} alt="Rocket ship" />
        </ArtCol>
      </Row>
    </LandingSection>
  );
};

export default Landing;
