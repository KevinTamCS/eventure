import styled from 'styled-components/macro';
import Col from 'react-bootstrap/Col';
import FormField from 'components/FormField';

export const EventInfoSection = styled.section`
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    padding: 0;
    max-width: 85%;
  }

  @media screen and (min-width: 992px) {
    max-width: 65%;
  }
`;

export const Fieldset = styled.fieldset`
  padding: 0;
  
  & > div {
    padding-bottom: 1.5rem;
  }
`;

export const Legend = styled.legend`
  font-size: 2rem;
  font-weight: bold;

  @media screen and (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const StyledCol = styled(Col)`
  padding-bottom: 1.5rem;

  @media screen and (min-width: 768px) {
    padding-bottom: 0;
  }
`;

export const OrganizerNameFormField = styled(FormField)`
  padding-top: 0.5rem;
`;
