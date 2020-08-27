import styled from 'styled-components/macro';
import Container from 'react-bootstrap/Container';
import { Form } from 'formik';

export const CreateEventContainer = styled(Container)`
  padding: 2rem 0;
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 0 auto;
  padding: 0 6.25vw 1rem;
`;

export const StyledForm = styled(Form)`
  padding: 0 6.25vw;

  // Submit button
  & > input:last-child {
    margin: 0 auto;
  }
`;
