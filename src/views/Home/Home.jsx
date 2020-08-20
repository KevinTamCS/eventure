// @flow
import React from 'react';
import HomeLanding from './components/HomeLanding';
import HomeFeaturedEvents from './components/HomeFeaturedEvents';
import './Home.scss';
import EventCategory from './components/EventCategory/EventCategory';
import Ending from './components/Ending';

const Home = () => {
  return (
    <div className="Home">
      <HomeLanding />
      <HomeFeaturedEvents />
      {/* Slowly render as many event categories as the user has */}
      <EventCategory title="Photography" />
      <EventCategory title="Live Performances" />
      <EventCategory title="Health and Wellness" />
      <Ending />
    </div>
  );
};

export default Home;
