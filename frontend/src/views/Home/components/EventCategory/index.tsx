import React, { useEffect, useState } from 'react';
import Event from 'components/Event';
import { Event as IEvent } from 'types';
import eventBanner from 'assets/dev/event-banner.jpg';
import { EventCategorySection, Heading, EventsContainer } from './styles';
import {
  EventCategories,
  eventCategoriesReadable,
} from 'components/EventEditor/eventMetadata';
import { API_URL } from '../../../../index';

interface Props {
  category: EventCategories;
}

const EventCategory: React.FC<Props> = (props) => {
  const { category } = props;
  const [eventsLoaded, setEventsLoaded] = useState<boolean>(false);
  const [events] = useState<JSX.Element[]>([]);

  // Fetch up to 8 events from backend
  useEffect(() => {
    fetch(`${API_URL}/events/category/${category}?count=8`, {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then(async (retrievedEvents: IEvent[]) => {
        retrievedEvents.forEach((event) => {
          events.push(
            <Event
              id={event.id}
              banner={typeof event.banner === 'string' ? event.banner : ''}
              title={event.title}
              startTime={event.startDateTime}
              organizer={event.organizer}
            />
          );
        });
        setEventsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <EventCategorySection>
      <Heading>{eventCategoriesReadable[category]}</Heading>
      {!eventsLoaded ? (
        <Event
          id={0}
          banner={eventBanner}
          title=""
          startTime={new Date(0)}
          organizer=""
          style={{
            opacity: 0,
          }}
        />
      ) : (
        <EventsContainer>{events}</EventsContainer>
      )}
    </EventCategorySection>
  );
};

export default EventCategory;
