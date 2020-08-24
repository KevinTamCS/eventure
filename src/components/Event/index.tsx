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
  banner?: string;
  bannerAlt?: string;
  title: string;
  organizer: string;
  startTime: Date;
}

const Event: React.FC<Props> = (props) => {
  const { banner, bannerAlt, title, organizer, startTime } = props;

  const startDateTime = moment(startTime).format('ddd, MMM D, YYYY, h:mm A z');

  return (
    <EventContainer>
      <Card to="events/:id">
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
