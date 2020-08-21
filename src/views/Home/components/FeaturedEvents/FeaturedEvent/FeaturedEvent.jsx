import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import clockIcon from 'assets/icons/clock.svg';
import './FeaturedEvent.scss';

const FeaturedEvent = (props) => {
  return (
    <article className="FeaturedEvent">
      <img
        className="FeaturedEvent-banner"
        src={props.banner}
        alt={props.bannerAlt}
      />

      <div className="FeaturedEvent-information">
        <h3 className="FeaturedEvent-information-heading">{props.title}</h3>
        <Organizer
          organizer={props.organizer}
          organizerImage={props.organizerImage}
        />
        <Time startTime={props.startTime} endTime={props.endTime} />
        <p className="FeaturedEvent-summary">{props.summary}</p>
      </div>
    </article>
  );
};

const Organizer = (props) => {
  return (
    <div className="FeaturedEvent-information-Organizer">
      <img
        src={props.organizerImage}
        alt="Event organizer"
        className="FeaturedEvent-information-Organizer-image"
      />
      <p className="FeaturedEvent-information-Organizer-name">
        By {props.organizer}
      </p>
    </div>
  );
};

const Time = (props) => {
  const startDate = moment(props.startTime).format('MMMM Do, YYYY');
  const startTime = moment(props.startTime).format('h:mm A');
  const endTime = moment(props.endTime).format('h:mm A');

  return (
    <div className="FeaturedEvent-information-Time">
      <img
        src={clockIcon}
        alt="Event time"
        className="FeaturedEvent-information-Time-icon"
      />
      <div className="FeaturedEvent-information-Time-date-time-group">
        <p className="FeaturedEvent-information-Time-date">{startDate}</p>
        <p className="FeaturedEvent-information-Time-time">
          {startTime} – {endTime}
        </p>
      </div>
    </div>
  );
};

FeaturedEvent.propTypes = {
  banner: propTypes.string,
  bannerAlt: propTypes.string,
  title: propTypes.string,
  organizer: propTypes.string,
  organizerImage: propTypes.string,
  startTime: propTypes.instanceOf(Date),
  endTime: propTypes.instanceOf(Date),
  summary: propTypes.string,
};

Organizer.propTypes = {
  organizer: propTypes.string,
  organizerImage: propTypes.string,
};

Time.propTypes = {
  startTime: propTypes.instanceOf(Date),
  endTime: propTypes.instanceOf(Date),
};

export default FeaturedEvent;
