import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Button } from '../../components/Button';

export const EventPageContainer = styled(Container)`
  padding: 0;

  @media screen and (min-width: 992px) {
    padding: 2.5rem 0;
  }
`;

export const BannerAndInfoRow = styled(Row)`
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 3rem;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 1.5rem;
  }
`;

export const Banner = styled.img`
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 6.25vw;

  @media screen and (min-width: 768px) {
    padding: 5vw;
  }

  @media screen and (min-width: 992px) {
    padding: 1rem 0 1rem 2.25rem;
  }
`;

export const Information = styled.div`
  margin-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const Heading = styled.h1`
  font-size: 2.25rem;
  margin: 0 0 1rem;
`;

export const OrganizerInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const OrganizerImage = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid gray;
  border-radius: 10rem;
`;

export const OrganizerName = styled.h2`
  margin: 0 0 0 1rem;
  font-size: 1.4rem;
  font-weight: normal;
`;

export const TimeInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const TimeIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
`;

export const TimeContents = styled.div`
  margin-left: 1rem;
  font-size: 1.4rem;

  & > * {
    margin-bottom: 0;
  }
`;

export const AddToCalendar = styled.a`
  margin-left: 3.5rem;
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  background-color: #4642f4;
`;

export const DetailsArticle = styled.article`
  padding: 0 6.25vw 6.25vw;

  @media screen and (min-width: 768px) {
    padding: 0 5vw 5vw;
  }

  @media screen and (min-width: 992px) {
    padding: 0 0.5rem;
  }
`;

export const Summary = styled.h3`
  padding-bottom: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Description = styled.p`
  font-size: 1.125rem;
`;
