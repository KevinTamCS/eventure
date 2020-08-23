import styled from 'styled-components/macro';
import { Form } from 'formik';
import { StyledButton } from 'components/Button/Button';
import FormField from 'components/FormField';

export const JoinContainer = styled.div`
  padding: 1rem 6.25vw 0;
`;

export const Heading = styled.h1`
  margin: 2rem 0;
  text-align: center;
`;

export const JoinForm = styled(Form)`
  margin: 0 auto;
`;

export const JoinFormField = styled(FormField)`
  // 700px
  @media screen and (min-width: 43.75rem) {
    width: 20rem;
  }
`;

export const SubmitButton = styled(StyledButton)`
  margin: 2rem auto;
  border: none;
`;

export const OAuthSeparator = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`;
