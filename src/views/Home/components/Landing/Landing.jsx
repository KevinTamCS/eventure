// @flow
import React from 'react';
import Button from 'components/Button';
import './Landing.scss';
import rocketShipArt from 'assets/rocket-ship.svg';

const Landing = () => {
  return (
    <section className="home-landing">
      <div className="home-landing-content">
        <h1 className="home-landing-heading">
          Embark on an adventure for virtual events.
        </h1>
        <p className="home-landing-paragraph">
          Eventure is a digital platform designed to help people discover and
          host virtual events, all without the hassle of the things that come
          with in-person events.
        </p>
        <Button to="/join" className="home-landing-button-signup">
          Get Started
        </Button>
      </div>
      <img className="home-landing-art" src={rocketShipArt} alt="Rocket ship"/>
    </section>
  );
};

export default Landing;
