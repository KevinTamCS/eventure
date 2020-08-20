import React from 'react';
import PropTypes from 'prop-types';
import Event from './Event';
import eventBanner from 'assets/dev/event-banner.jpg';
import './EventCategory.scss';

const EventCategory = (props) => {
  return (
    <section className="EventCategory">
      <h2 className="EventCategory-heading">{props.title}</h2>
      <div className="EventCategory-events">
        <Event
          banner={eventBanner}
          title="My Awesome Event"
          startTime={new Date('January 1, 2021 10:00 AM PDT')}
          organizer="John Doe"
        />
      </div>
    </section>
  );
};

EventCategory.propTypes = {
  title: PropTypes.string,
};

export default EventCategory;
