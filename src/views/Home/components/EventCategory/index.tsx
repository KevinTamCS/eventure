import React from 'react';
import Event from 'components/Event';
import eventBanner from 'assets/dev/event-banner.jpg';
import {
  EventCategoryContainer,
  Heading,
  EventsContainer,
  Events,
} from './styles';

interface Props {
  title: string;
}

const EventCategory: React.FC<Props> = (props) => {
  const { title } = props;

  // Temporary testing events
  const events: JSX.Element[] = [];
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
      <Heading>{title}</Heading>
      <EventsContainer>
        <Events>{events}</Events>
      </EventsContainer>
    </EventCategoryContainer>
  );
};

export default EventCategory;
