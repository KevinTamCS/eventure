// @flow
import React from 'react';
import './HomeFeaturedEvents.scss';
import FeaturedEvent from './FeaturedEvent';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';

const HomeFeaturedEvents = () => {
  return (
    <section className="home-featured-events">
      <h2 className="home-featured-events-heading">Featured Events</h2>
      <FeaturedEvent
        banner={eventBanner}
        bannerAlt="My awesome event"
        title="My Awesome Event"
        organizer="John Doe"
        organizerImage={organizerImage}
        startTime={new Date('January 1, 2021 10:00 AM')}
        endTime={new Date('January 1, 2021 12:00 PM')}
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus justo fermentum, vehicula est id, dictum lectus. Vivamus et pharetra diam gravida."
      />
    </section>
  );
};

export default HomeFeaturedEvents;
