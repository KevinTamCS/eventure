import React from 'react';
import Organizer from './components/Organizer';
import Time from './components/Time';
import {
  Banner,
  Card,
  FeaturedEventContainer,
  Information,
  InformationHeading,
} from './styles';

interface Props {
  banner?: string;
  bannerAlt?: string;
  title: string;
  organizerName: string;
  organizerImage: string;
  startTime: Date;
  endTime: Date;
  summary?: string;
}

const FeaturedEvent: React.FC<Props> = ({
  banner,
  bannerAlt,
  title,
  organizerName,
  organizerImage,
  startTime,
  endTime,
  summary,
}) => {
  return (
    <FeaturedEventContainer>
      <Card to="/event/:id">
        <Banner src={banner} alt={bannerAlt} />
        <Information>
          <InformationHeading>{title}</InformationHeading>
          <Organizer name={organizerName} image={organizerImage} />
          <Time startTime={startTime} endTime={endTime} />
          <p>{summary}</p>
        </Information>
      </Card>
    </FeaturedEventContainer>
  );
};

export default FeaturedEvent;
