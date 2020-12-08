import React from 'react';
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

interface Props {
  id: number;
  banner?: string;
  bannerAlt?: string;
  title: string;
  organizer: string;
  startTime: Date;
  style?: React.CSSProperties;
}

const Event: React.FC<Props> = (props) => {
  const { id, banner, bannerAlt, title, organizer, startTime, style } = props;

  const startDateTime = moment(startTime).format('MMM D, YYYY, h:mm A z');

  return (
    <EventContainer style={style}>
      <Card to={`events/${id}`}>
        <EventBanner src={banner} alt={bannerAlt} />
        <EventInformation>
          <div>
            <EventTitle>{title}</EventTitle>
            <EventOrganizer>{organizer}</EventOrganizer>
          </div>
          <EventStartTime>{startDateTime}</EventStartTime>
        </EventInformation>
      </Card>
    </EventContainer>
  );
};

export default Event;
