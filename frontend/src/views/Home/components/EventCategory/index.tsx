import React, { useEffect, useState } from 'react';
import Event from 'components/Event';
import { Event as IEvent } from 'types';
import eventBanner from 'assets/dev/event-banner.jpg';
import { EventCategorySection, Heading, EventsContainer } from './styles';
import {
  EventCategories,
  eventCategoriesReadable,
} from 'components/EventEditor/eventMetadata';
import { API_ROOT } from '../../../../index';
import EventLoadingPlaceholder from '../../../../components/EventLoadingPlaceholder';

interface Props {
  category: EventCategories;
}

const EventCategory: React.FC<Props> = (props) => {
  const { category } = props;
  const [eventsLoaded, setEventsLoaded] = useState<boolean>(false);
  const [events] = useState<JSX.Element[]>([]);

  // Fetch up to 8 events from backend
  useEffect(() => {
    fetch(`${API_ROOT}/events/category/${category}?count=8`, {
      mode: 'cors',
    })
      .then((res) => res.json())
      .then(async (retrievedEvents: IEvent[]) => {
        retrievedEvents.forEach((event) => {
          events.push(
            <Event
              id={event.id}
              // banner={typeof event.banner === 'string' ? event.banner : ''}
              banner={eventBanner}
              title={event.title}
              startTime={event.startDateTime}
              organizer={event.organizer}
            />
          );
        });
        // Display most recent events first
        events.reverse();
        setEventsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <EventCategorySection>
      <Heading>{eventCategoriesReadable[category]}</Heading>
      <EventsContainer>
        {!eventsLoaded ? (
          <>
            <EventLoadingPlaceholder />
            <EventLoadingPlaceholder />
            <EventLoadingPlaceholder />
            <EventLoadingPlaceholder />
          </>
        ) : (
          events
        )}
      </EventsContainer>
    </EventCategorySection>
  );
};

export default EventCategory;
