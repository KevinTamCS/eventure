// @flow
import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment-timezone';
import {
  EventBanner,
  Card,
  EventContainer,
  EventInformation,
  EventOrganizer,
  EventStartTime,
  EventTitle,
} from './styles';

const Event = (props) => {
  const startDateTime = moment(props.startTime).format(
    'ddd, MMM D, YYYY, h:mm A z'
  );

  return (
    <EventContainer>
      <Card to="events/:id">
        <EventBanner src={props.banner} alt={props.bannerAlt} />
        <EventInformation>
          <div>
            <EventTitle>{props.title}</EventTitle>
            <EventOrganizer>{props.organizer}</EventOrganizer>
          </div>
          <EventStartTime>{startDateTime}</EventStartTime>
        </EventInformation>
      </Card>
    </EventContainer>
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
