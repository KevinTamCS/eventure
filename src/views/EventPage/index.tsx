import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  AddToCalendar,
  Banner,
  EventBannerAndInfoRow,
  EventDetailsArticle,
  EventPageContainer,
  EventSummary,
  Heading, Information,
  InfoSection,
  OrganizerImage,
  OrganizerInfo,
  OrganizerName,
  RegisterButton,
  TimeContents,
  TimeIcon,
  TimeInfo
} from './styles';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';
import timeIcon from 'assets/icons/clock.svg';

const registerForEvent = (): void => {
  console.log('Registered for event');
};

const EventPage: React.FC = (): JSX.Element => {
  return (
    <EventPageContainer fluid="lg">
      {/* Banner and Event Info */}
      <EventBannerAndInfoRow noGutters>
        <Col lg={8}>
          <Banner src={eventBanner} alt="Event banner alt text" />
        </Col>
        <Col lg={4}>
          <InfoSection>
            <Information>
              <Heading>My Awesome Event</Heading>
              <OrganizerInfo>
                <OrganizerImage src={organizerImage} alt="Organizer image" />
                <OrganizerName>By John Doe</OrganizerName>
              </OrganizerInfo>
              <TimeInfo>
                <TimeIcon src={timeIcon} alt="Time icon" />
                <TimeContents>
                  <p>Tuesday, January 1</p>
                  <p>10:00 AM - 12:00 PM</p>
                </TimeContents>
              </TimeInfo>
              <AddToCalendar href="#">Add to Calendar</AddToCalendar>
            </Information>
            <RegisterButton onClick={registerForEvent}>
              Register for this Event
            </RegisterButton>
          </InfoSection>
        </Col>
      </EventBannerAndInfoRow>

      {/* Event Summary and Description */}
      <Row noGutters>
        <Col lg={8}>
          <EventDetailsArticle>
            <EventSummary>
              A summary of my awesome event goes here. It should be under 160
              characters long.
            </EventSummary>
          </EventDetailsArticle>
        </Col>
      </Row>
    </EventPageContainer>
  );
};

export default EventPage;
