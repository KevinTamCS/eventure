// @flow
import React from 'react';
import moment from 'moment-timezone';
import propTypes from 'prop-types';
import './Event.scss';

const Event = (props) => {
  console.log(typeof props.startTime);
  const startDateTime = moment(props.startTime).format(
    'ddd, MMM D, YYYY, h:mm A z'
  );

  return (
    <article className="Event">
      <img className="Event-banner" src={props.banner} alt={props.bannerAlt} />
      <div className="Event-information">
        <div>
          <h3 className="Event-information-title">{props.title}</h3>
          <p className="Event-information-organizer">{props.organizer}</p>
        </div>
        <p className="Event-information-start-time">{startDateTime}</p>
      </div>
    </article>
  );
};

Event.propTypes = {
  banner: propTypes.string,
  bannerAlt: propTypes.string,
  title: propTypes.string,
  organizer: propTypes.string,
  startTime: propTypes.instanceOf(Date),
};

export default Event;
