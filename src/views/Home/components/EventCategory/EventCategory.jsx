import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';
import eventBanner from 'assets/dev/event-banner.jpg';
import './EventCategory.scss';

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
    <section className="EventCategory">
      <h2 className="EventCategory-heading">{props.title}</h2>
      <div className="EventCategory-events-container">
        <div className="EventCategory-events">{events}</div>
      </div>
    </section>
  );
};

EventCategory.propTypes = {
  title: PropTypes.string,
};

export default EventCategory;
