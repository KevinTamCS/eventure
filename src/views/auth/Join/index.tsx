import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  AuthContainer,
  Heading,
  AuthForm,
  AuthFormField,
  AuthButton,
  OAuthSeparator,
} from 'views/auth/styles';

const Join = () => {
  const history = useHistory();

  return (
    <AuthContainer>
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
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          history.push('/welcome');
        }}
      >
        <AuthForm>
          <AuthFormField
            name="firstName"
            type="text"
            label="First Name"
            required
          />

          <AuthFormField
            name="lastName"
            type="text"
            label="Last Name"
            required
          />

          <AuthFormField name="email" type="email" label="Email" required />

          <AuthFormField
            name="password"
            type="password"
            label="Password"
            required
          />

          <AuthButton value="Get Started" centered />
        </AuthForm>
      </Formik>

      <OAuthSeparator>or</OAuthSeparator>

      {/* TODO: Add Continue with Facebook and Google buttons */}
    </AuthContainer>
  );
};

export default Join;
