import React from 'react';
import propTypes from 'prop-types';
import Organizer from './Organizer';
import Time from './Time';
import {
  Banner,
  Card,
  FeaturedEventContainer,
  Information,
  InformationHeading,
} from './styles';

const FeaturedEvent = (props) => {
  return (
    <FeaturedEventContainer>
      <Card to="/event/:id">
        <Banner src={props.banner} alt={props.bannerAlt} />
        <Information>
          <InformationHeading>{props.title}</InformationHeading>
          <Organizer
            organizer={props.organizer}
            organizerImage={props.organizerImage}
          />
          <Time startTime={props.startTime} endTime={props.endTime} />
          <p>{props.summary}</p>
        </Information>
      </Card>
    </FeaturedEventContainer>
  );
};

FeaturedEvent.propTypes = {
  banner: propTypes.string,
  bannerAlt: propTypes.string,
  title: propTypes.string,
  organizer: propTypes.string,
  organizerImage: propTypes.string,
  startTime: propTypes.instanceOf(Date),
  endTime: propTypes.instanceOf(Date),
  summary: propTypes.string,
};

export default FeaturedEvent;
