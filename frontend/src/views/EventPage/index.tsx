import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../../node_modules/placeholder-loading/src/scss/placeholder-loading.scss';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const eventId: number = parseInt(location.pathname.split('/')[2]);

      fetch(`${API_URL}/events/${eventId}`, {
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
            alt="Event banner alt text"
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

interface PlaceholderLineProps {
  big?: boolean;
  style?: React.CSSProperties;
}

const PlaceholderLine = (props: PlaceholderLineProps): JSX.Element => {
  const { big, style } = props;
  const height = big ? '2.25rem' : '1rem';

  return (
    <PlaceholderItemStyles>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-row">
            <div className={`ph-col-12`} style={{ height: height, ...style }} />
          </div>
        </div>
      </div>
    </PlaceholderItemStyles>
  );
};

const PlaceholderText = (): JSX.Element => (
  <PlaceholderItemStyles>
    <div className="ph-item" style={{ height: 'auto', border: 'none' }}>
      <div className="ph-col-12">
        <div className="ph-row">
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-12"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-6"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
        </div>
        <div className="ph-row" style={{ width: '100%' }}>
          <div
            className="ph-col-12 empty"
            style={{ height: '2rem', marginBottom: '0.5rem' }}
          />
        </div>
        <PlaceholderLine
          big
          style={{ height: '1.5rem', marginBottom: '0.5rem', maxWidth: '90%' }}
        />
        <div className="ph-row" style={{ width: '100%' }}>
          <div
            className="ph-col-12 empty"
            style={{ height: '0.5rem', marginBottom: '0' }}
          />
        </div>
        <div className="ph-row">
          <div
            className="ph-col-8"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-12"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-8"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-10"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
          <div
            className="ph-col-4"
            style={{ height: '1rem', marginBottom: '0.5rem' }}
          />
        </div>
      </div>
    </div>
  </PlaceholderItemStyles>
);

const PlaceholderItemStyles = styled.div`
  .ph-item,
  .ph-row,
  .ph-col-12 {
    padding: 0;
    margin: 0;
    border: none;
  }
`;

export default EventPage;
