import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Event } from 'types';
import {
  AddToCalendar,
  Banner,
  BannerAndInfoRow,
  DetailsArticle,
  EventPageContainer,
  Summary,
  Heading,
  Information,
  InfoSection,
  OrganizerImage,
  OrganizerInfo,
  OrganizerName,
  RegisterButton,
  TimeContents,
  TimeIcon,
  TimeInfo,
  Description,
} from './styles';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';
import timeIcon from 'assets/icons/clock.svg';
import { API_URL } from '../../index';

const registerForEvent = (): void => {
  console.log('Registered for event');
};

const emptyEvent: Event = {
  title: 'Loading...',
  organizer: 'Loading...',
  startDateTime: new Date(0),
  endDateTime: new Date(0),
  summary: null,
  description: null,
  banner: null,
  creationDateTime: new Date(0),
  lastUpdateDateTime: new Date(0),
};

const EventPage: React.FC = (): JSX.Element => {
  const location = useLocation();

  const [event, setEvent] = useState<Event>(emptyEvent);

  useEffect(() => {
    try {
      const eventId: number = parseInt(location.pathname.split('/')[2]);

      fetch(`${API_URL}/events/${eventId}`, {
        mode: 'cors',
      })
        .then(async (res): Promise<Event | undefined> => {
          if (res.status === 404) {
            console.error('No event found with this ID');
            setEvent({
              ...emptyEvent,
              title: `No event found with ID ${eventId}.`,
              organizer: 'No organizer found.',
            });
            return undefined;
          } else {
            return await res.json();
          }
        })
        .then((eventData) => {
          if (eventData !== undefined) {
            setEvent({
              title: eventData.title,
              organizer: eventData.organizer,
              startDateTime: new Date(eventData.startDateTime),
              endDateTime: new Date(eventData.endDateTime),
              summary: eventData.summary,
              description: eventData.description,
              banner: eventData.banner,
              creationDateTime: new Date(eventData.creationDateTime),
              lastUpdateDateTime: new Date(eventData.lastUpdateDateTime),
            });
          }
        });
    } catch (error) {
      console.error('An error occurred while getting event data.');
      console.error(error);
    }
  }, [location.pathname]);

  return (
    <EventPageContainer fluid="lg">
      {/* Banner and Event Info */}
      <BannerAndInfoRow noGutters>
        <Col lg={8}>
          <Banner
            src={event.banner ? event.banner : eventBanner}
            alt="Event banner alt text"
          />
        </Col>
        <Col lg={4}>
          <InfoSection>
            <Information>
              <Heading>{event.title}</Heading>
              <OrganizerInfo>
                <OrganizerImage src={organizerImage} alt="Organizer image" />
                <OrganizerName>By {event.organizer}</OrganizerName>
              </OrganizerInfo>
              <TimeInfo>
                <TimeIcon src={timeIcon} alt="Time icon" />
                <TimeContents>
                  <p>{event.startDateTime.toLocaleDateString()}</p>
                  <p>{event.startDateTime.toLocaleTimeString()}</p>
                </TimeContents>
              </TimeInfo>
              <AddToCalendar href="#">Add to Calendar</AddToCalendar>
            </Information>
            <RegisterButton onClick={registerForEvent}>
              Register for this Event
            </RegisterButton>
          </InfoSection>
        </Col>
      </BannerAndInfoRow>

      {/* Event Summary and Description */}
      <Row noGutters>
        <Col lg={8}>
          <DetailsArticle>
            <Summary>{event.summary ? event.summary : ''}</Summary>
            <Description>
              {event.description ? event.description : ''}
            </Description>
          </DetailsArticle>
        </Col>
      </Row>
    </EventPageContainer>
  );
};

export default EventPage;
