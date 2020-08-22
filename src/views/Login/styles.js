import styled from 'styled-components/macro';
import FormField from 'components/FormField';
import { StyledButton } from 'components/Button/Button';

export const LoginContainer = styled.div`
  padding: 1rem 6.25vw 0;
`;

export const Heading = styled.h1`
  margin: 2rem 0;
  text-align: center;
`;

export const LoginFormField = styled(FormField)`
  margin-bottom: 1rem;
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
