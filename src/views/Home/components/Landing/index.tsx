import React from 'react';
import { LinkButton } from 'components/Button';
import rocketShipArt from 'assets/rocket-ship.svg';
import {
  LandingSection,
  StyledRow,
  ContentCol,
  Heading,
  Description,
  ArtCol,
  Art,
} from './styles';

const Landing = () => {
  return (
    <LandingSection>
      <StyledRow noGutters>
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
      </StyledRow>
    </LandingSection>
  );
};

export default Landing;
