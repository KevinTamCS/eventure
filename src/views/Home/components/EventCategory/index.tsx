import React from 'react';
import Event from 'components/Event';
import eventBanner from 'assets/dev/event-banner.jpg';
import { EventCategoryContainer, Heading, EventsContainer } from './styles';

interface Props {
  title: string;
}

const EventCategory: React.FC<Props> = (props) => {
  const { title } = props;

  // Temporary testing events
  const events: JSX.Element[] = [];
  for (let i = 0; i < 8; i++) {
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
      <EventsContainer>{events}</EventsContainer>
    </EventCategoryContainer>
  );
};

export default EventCategory;
