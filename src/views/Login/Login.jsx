// @flow
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import {
  LoginContainer,
  Heading,
  LoginFormField,
  OAuthSeparator,
  SubmitButton,
} from './styles';
import Button from 'components/Button';

const Login = () => {
  const history = useHistory();

  return (
    <LoginContainer>
      <Heading>Log In</Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(`Logging in user ${values.email}`);
          localStorage.setItem('isLoggedIn', true);
          history.push('/');
        }}
      >
        <Form>
          <LoginFormField
            labelFor="email"
            inputName="email"
            inputType="email"
            required
          >
            Email
          </LoginFormField>

          <LoginFormField
            labelFor="password"
            inputName="password"
            inputType="password"
            required
          >
            Password
          </LoginFormField>

          <SubmitButton as="input" type="submit" value="Log In" />
        </Form>
      </Formik>
    </LoginContainer>
  );
};

export default Login;
