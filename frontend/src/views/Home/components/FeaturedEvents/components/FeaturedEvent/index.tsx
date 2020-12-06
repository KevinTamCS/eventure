import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Organizer from '../Organizer';
import Time from '../Time';
import {
  Banner,
  StyledLink,
  FeaturedEventArticle,
  Information,
  InformationHeading,
  Summary,
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

const FeaturedEvent: React.FC<Props> = (props): JSX.Element => {
  const {
    banner,
    bannerAlt,
    title,
    organizerName,
    organizerImage,
    startTime,
    endTime,
    summary,
  } = props;

  return (
    <FeaturedEventArticle>
      <StyledLink to="/events/1">
        <Row noGutters>
          <Col lg={8}>
            <Banner src={banner} alt={bannerAlt} />
          </Col>
          <Col lg={4}>
            <Information>
              <InformationHeading>{title}</InformationHeading>
              <Organizer name={organizerName} image={organizerImage} />
              <Time startTime={startTime} endTime={endTime} />
              <Summary>{summary}</Summary>
            </Information>
          </Col>
        </Row>
      </StyledLink>
    </FeaturedEventArticle>
  );
};

export default FeaturedEvent;
