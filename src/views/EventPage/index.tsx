import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

const registerForEvent = (): void => {
  console.log('Registered for event');
};

const EventPage: React.FC = (): JSX.Element => {
  return (
    <EventPageContainer fluid="lg">
      {/* Banner and Event Info */}
      <BannerAndInfoRow noGutters>
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
      </BannerAndInfoRow>

      {/* Event Summary and Description */}
      <Row noGutters>
        <Col lg={8}>
          <DetailsArticle>
            <Summary>
              A summary of my awesome event goes here. It should be under 160
              characters long.
            </Summary>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ornare ante ut nunc varius tristique. Donec semper elit semper,
              sagittis lacus in, eleifend nunc. Sed ut blandit nisl, ut vehicula
              tellus. Vivamus luctus ex quis justo vulputate elementum. Nam
              aliquet sit amet sapien sed aliquam. Proin gravida velit vitae
              metus ultrices ullamcorper. Fusce id turpis ut sem finibus tempor.
              Cras tempus, est sit amet bibendum vestibulum, mi mauris suscipit
              velit, vel ultricies erat massa vitae nisi. Morbi vitae lacus at
              tellus iaculis rutrum. Curabitur cursus enim at dui dignissim
              dignissim. Quisque dignissim tincidunt diam. Curabitur gravida
              auctor augue, non feugiat dolor pretium vitae. Praesent tristique
              ipsum sed porta pretium. Integer volutpat fringilla ultricies.
              Cras pharetra pulvinar quam, at tempus erat scelerisque dictum.
              Nulla tempus, risus vitae auctor accumsan, magna lacus luctus
              lacus, ut elementum ligula turpis vitae lacus.
            </Description>
          </DetailsArticle>
        </Col>
      </Row>
    </EventPageContainer>
  );
};

export default EventPage;
