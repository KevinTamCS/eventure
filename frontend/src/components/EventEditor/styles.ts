import styled from 'styled-components/macro';
import Col from 'react-bootstrap/Col';
import { Form } from 'formik';
import { SubmitButton } from '../Button';

export const FormSection = styled.section`
  margin: 0 auto;
  padding: 1rem 0;

  @media screen and (min-width: 768px) {
    padding: 1rem 0;
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

  & > div:last-child {
    padding-bottom: 0;
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

export const StyledForm = styled(Form)`
  padding: 0 6.25vw;

  // Submit button
  & > input:last-child {
    margin: 0 auto;
  }
`;

export const EventSubmitButton = styled(SubmitButton)`
  margin: 0 auto 1rem;
`;
