import styled from 'styled-components/macro';
import { Form } from 'formik';
import FormField from 'components/FormField';
import { SubmitButton } from 'components/Button';

export const AuthContainer = styled.div`
  padding: 1rem 6.25vw 0;
`;

export const Heading = styled.h1`
  margin: 2rem 0;
  text-align: center;
`;

export const AuthForm = styled(Form)`
  margin: 0 auto;
`;

export const AuthFormField = styled(FormField)`
  margin: 0 auto 1rem;

  // 700px
  @media screen and (min-width: 43.75rem) {
    width: 20rem;
  }
`;

export const AuthButton = styled(SubmitButton)`
  margin: 2rem auto;
`;

export const OAuthSeparator = styled.p`
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
`;
