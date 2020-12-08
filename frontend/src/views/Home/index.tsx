import React, { useEffect, useState } from 'react';
import Landing from './components/Landing';
import FeaturedEvents from './components/FeaturedEvents';
import EventCategory from './components/EventCategory';
import { EventCategories } from 'components/EventEditor/eventMetadata';
import Ending from './components/Ending';
import { StyledContainer } from './styles';
import { API_URL } from '../../index';
import { Event as IEvent } from '../../types';
import Event from '../../components/Event';
import {
  EventCategorySection,
  EventsContainer,
  Heading,
} from './components/EventCategory/styles';
import eventBanner from 'assets/dev/event-banner.jpg';
import EventLoadingPlaceholder from '../../components/EventLoadingPlaceholder';

const Home = (): JSX.Element => {
  const isLoggedIn: boolean = JSON.parse(
    localStorage.getItem('isLoggedIn') as string
  );

  const [eventsLoaded, setEventsLoaded] = useState<boolean>(false);
  const [events] = useState<JSX.Element[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/events`, {
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
    <>
      <StyledContainer fluid="md">
        {!isLoggedIn && <Landing />}
        <FeaturedEvents isLoggedIn={isLoggedIn} />
      </StyledContainer>

      <EventCategorySection>
        <Heading>Recently Created</Heading>
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

      {/* Slowly render as many event categories as the user has */}
      <EventCategory category={EventCategories.Photography} />
      <EventCategory category={EventCategories.LivePerformances} />
      <EventCategory category={EventCategories.HealthAndWellness} />

      {!isLoggedIn && <Ending />}
    </>
  );
};

export default Home;
