import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import {
  JoinContainer,
  Heading,
  JoinForm,
  JoinFormField,
  SubmitButton,
  OAuthSeparator,
} from './styles';

const Join = () => {
  const history = useHistory();

  return (
    <JoinContainer>
      <Heading>Join Eventure</Heading>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(
            `Registering user ${values.firstName} with email ${values.email}`
          );
          console.log(`Values:\n\n${JSON.stringify(values, null, 2)}`);
          localStorage.setItem('firstName', values.firstName);
          localStorage.setItem('lastName', values.lastName);
          localStorage.setItem('email', values.email);
          localStorage.setItem('isLoggedIn', true);
          history.push('/welcome');
        }}
      >
        <JoinForm>
          <JoinFormField
            labelFor="firstName"
            inputType="text"
            inputName="firstName"
            centered
            marginBottom
            required
          >
            First Name
          </JoinFormField>

          <JoinFormField
            labelFor="lastName"
            inputType="text"
            inputName="lastName"
            centered
            marginBottom
            required
          >
            Last Name
          </JoinFormField>

          <JoinFormField
            labelFor="email"
            inputType="email"
            inputName="email"
            centered
            marginBottom
            required
          >
            Email
          </JoinFormField>

          <JoinFormField
            labelFor="password"
            inputType="password"
            inputName="password"
            centered
            marginBottom
            required
          >
            Password
          </JoinFormField>

          <SubmitButton as="input" type="submit" value="Get Started" />
        </JoinForm>
      </Formik>

      <OAuthSeparator>or</OAuthSeparator>

      {/* TODO: Add Continue with Facebook and Google buttons */}
    </JoinContainer>
  );
};

export default Join;
