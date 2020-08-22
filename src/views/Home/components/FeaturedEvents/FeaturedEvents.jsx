// @flow
import React from 'react';
import FeaturedEvent from 'components/FeaturedEvent';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';
import propTypes from 'prop-types';
import { FeaturedEventsContainer, Heading } from './styles';

const FeaturedEvents = ({ isLoggedIn }) => {
  return (
    <FeaturedEventsContainer>
      <Heading>{!isLoggedIn ? 'Featured Events' : 'Events for You'}</Heading>
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
    </FeaturedEventsContainer>
  );
};

FeaturedEvents.propTypes = {
  isLoggedIn: propTypes.bool,
};

export default FeaturedEvents;
