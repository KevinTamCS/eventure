// @flow
import React from 'react';
import Button from 'components/Button';
import './HomeLanding.scss';

const HomeLanding = () => {
  return (
    <section className="home-landing">
      <h1 className="home-landing-heading">
        Embark on an adventure for virtual events.
      </h1>
      <p className="home-landing-paragraph">
        Eventure is a digital platform designed to help people discover and host
        virtual events, all without the hassle of the things that come with
        in-person events.
      </p>
      <Button to="/signup" className="home-landing-button-signup">
        Get Started
      </Button>
    </section>
  );
};

export default HomeLanding;
