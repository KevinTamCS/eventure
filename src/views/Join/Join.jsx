import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import FormField from '../../components/FormField';
import {
  JoinContainer,
  Heading,
  JoinForm,
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
          <FormField
            labelFor="firstName"
            inputType="text"
            inputName="firstName"
            marginBottom
            required
          >
            First Name
          </FormField>

          <FormField
            labelFor="lastName"
            inputType="text"
            inputName="lastName"
            marginBottom
            required
          >
            Last Name
          </FormField>

          <FormField
            labelFor="email"
            inputType="email"
            inputName="email"
            marginBottom
            required
          >
            Email
          </FormField>

          <FormField
            labelFor="password"
            inputType="password"
            inputName="password"
            marginBottom
            required
          >
            Password
          </FormField>

          <SubmitButton as="input" type="submit" value="Get Started" />
        </JoinForm>
      </Formik>

      <OAuthSeparator>or</OAuthSeparator>

      {/* TODO: Add Continue with Facebook and Google buttons */}
    </JoinContainer>
  );
};

export default Join;
