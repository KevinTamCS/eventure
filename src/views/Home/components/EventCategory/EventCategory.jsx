import React from 'react';
import PropTypes from 'prop-types';
import Event from 'components/Event';
import eventBanner from 'assets/dev/event-banner.jpg';
import {
  EventCategoryContainer,
  Heading,
  EventsContainer,
  Events,
} from './styles';

const EventCategory = (props) => {
  // Temporary testing events
  const events = [];
  for (let i = 0; i < 7; i++) {
    events.push(
      <Event
        banner={eventBanner}
        title="Lorem ipsum dolor sit amet, consectetur adipiscing elit nec."
        startTime={new Date('January 1, 2021 10:00 AM PDT')}
        organizer="John Doe"
      />
    );
  }

  return (
    <EventCategoryContainer>
      <Heading>{props.title}</Heading>
      <EventsContainer>
        <Events>{events}</Events>
      </EventsContainer>
    </EventCategoryContainer>
  );
};

EventCategory.propTypes = {
  title: PropTypes.string,
};

export default EventCategory;
