import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../node_modules/placeholder-loading/src/scss/placeholder-loading.scss';
import { Event } from 'types';
import {
  AddToCalendar,
  Banner,
  BannerAndInfoRow,
  Description,
  DetailsArticle,
  EventPageContainer,
  Heading,
  Information,
  InfoSection,
  OrganizerImage,
  OrganizerInfo,
  OrganizerName,
  RegisterButton,
  Summary,
  TimeContents,
  TimeIcon,
  TimeInfo
} from './styles';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';
import timeIcon from 'assets/icons/clock.svg';
import { API_ROOT } from '../../index';
import { PlaceholderLine, PlaceholderText } from '../../components/PlaceholderItems';

const registerForEvent = (): void => {
  console.log('Registered for event');
};

const emptyEvent: Event = {
  id: 0,
  tags: [],
  timeZone: {},
  title: 'Loading...',
  organizer: 'Loading...',
  startDateTime: new Date(0),
  endDateTime: new Date(0),
  summary: undefined,
  description: undefined,
  banner: undefined,
  creationDateTime: new Date(0),
  lastUpdateDateTime: new Date(0),
};

const EventPage: React.FC = (): JSX.Element => {
  const location = useLocation();

  const [event, setEvent] = useState<Event>(emptyEvent);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const eventId: number = parseInt(location.pathname.split('/')[2]);

      fetch(`${API_ROOT}/events/${eventId}`, {
        mode: 'cors',
      })
        .then(
          async (res): Promise<Event | undefined> => {
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
          }
        )
        .then((eventData) => {
          if (eventData !== undefined) {
            setEvent({
              id: eventData.id,
              timeZone: eventData.timeZone,
              category: eventData.category,
              format: eventData.format,
              tags: eventData.tags,
              title: eventData.title,
              organizer: eventData.organizer,
              startDateTime: new Date(eventData.startDateTime),
              endDateTime: new Date(eventData.endDateTime),
              summary: eventData.summary,
              description: eventData.description,
              banner: eventData.banner,
            });
            setIsLoading(false);
            // setTimeout(() => setIsLoading(false), 500);
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
            alt={event.title}
          />
        </Col>
        <Col lg={4}>
          <InfoSection>
            <Information>
              <Heading>
                {isLoading ? <PlaceholderLine big /> : event.title}
              </Heading>
              <OrganizerInfo>
                <OrganizerImage src={organizerImage} alt="Organizer image" />
                <OrganizerName>
                  {isLoading ? <PlaceholderLine /> : `By ${event.organizer}`}
                </OrganizerName>
              </OrganizerInfo>
              <TimeInfo>
                <TimeIcon src={timeIcon} alt="Time icon" />
                <TimeContents>
                  {isLoading ? (
                    <PlaceholderLine style={{ marginBottom: '0.25rem' }} />
                  ) : (
                    <p>{event.startDateTime.toLocaleDateString()}</p>
                  )}
                  {isLoading ? (
                    <PlaceholderLine />
                  ) : (
                    <p>{event.startDateTime.toLocaleTimeString()}</p>
                  )}
                </TimeContents>
              </TimeInfo>
              {!isLoading && (
                <AddToCalendar href="#">Add to Calendar</AddToCalendar>
              )}
            </Information>
            {isLoading ? (
              <PlaceholderLine big />
            ) : (
              <RegisterButton onClick={registerForEvent}>
                Register for this Event
              </RegisterButton> //
            )}
          </InfoSection>
        </Col>
      </BannerAndInfoRow>

      {/* Event Summary and Description */}
      <Row noGutters>
        <Col lg={8}>
          <DetailsArticle>
            <Summary>
              {isLoading ? (
                <PlaceholderLine big />
              ) : event.summary ? (
                event.summary
              ) : (
                ''
              )}
            </Summary>
            <div style={{ height: '10rem' }}>
              {isLoading ? (
                <PlaceholderText />
              ) : (
                <Description>
                  {event.description ? event.description : ''}
                </Description>
              )}
            </div>
          </DetailsArticle>
        </Col>
        {/*<Col lg={4}>Details</Col>*/}
      </Row>
    </EventPageContainer>
  );
};

export default EventPage;
