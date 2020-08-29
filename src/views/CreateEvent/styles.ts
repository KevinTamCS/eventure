import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import { Form } from 'formik';
import Col from 'react-bootstrap/Col';
import { Button, SubmitButton } from '../../components/Button';

export const CreateEventContainer = styled(Container)`
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 0 6.25vw;

  @media screen and (min-width: 768px) {
    padding-bottom: 0.5rem;
  }
`;

export const CreateEventForm = styled(Form)`
  padding: 0 6.25vw;

  // Submit button
  & > input:last-child {
    margin: 0 auto;
  }
`;

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

export const FormButtonsContainer = styled.div``;

export const SubmitFormButton = styled(SubmitButton)`
  margin: 0 auto 1rem;
`;

export const SaveForLaterButton = styled(Button)`
  margin: 0 auto;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  color: #302cde;
  background-color: #e7edff;

  &:hover {
    color: #302cde;
    background-color: #edf0ff;
  }

  &&&:active {
    color: #302cde;
    background-color: #d1dcff;
  }

  &&:focus {
    color: #302cde;
    background-color: #d8dfff;
  }
`;
