import React from 'react';
import FeaturedEvent from './components/FeaturedEvent';
import eventBanner from 'assets/dev/event-banner.jpg';
import organizerImage from 'assets/dev/organizer.jpg';
import { FeaturedEventsSection, Heading } from './styles';

interface Props {
  isLoggedIn: boolean;
}

const FeaturedEvents: React.FC<Props> = (props) => {
  const { isLoggedIn } = props;

  return (
    <FeaturedEventsSection>
      <Heading>{!isLoggedIn ? 'Featured Events' : 'Events for You'}</Heading>
      <FeaturedEvent
        banner={eventBanner}
        bannerAlt="My awesome event"
        title="Introduction to Cloud Computing"
        organizerName="John Doe"
        organizerImage={organizerImage}
        startTime={new Date('January 1, 2021 10:00 AM')}
        endTime={new Date('January 1, 2021 12:00 PM')}
        summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In rhoncus justo fermentum, vehicula est id, dictum lectus. Vivamus et pharetra diam gravida."
      />
    </FeaturedEventsSection>
  );
};

export default FeaturedEvents;
