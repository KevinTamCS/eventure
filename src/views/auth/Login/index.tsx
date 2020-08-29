import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik } from 'formik';
import {
  AuthButton,
  AuthContainer,
  AuthForm,
  AuthFormField,
  Heading,
  OAuthSeparator,
} from 'views/auth/styles';

const Login = () => {
  const history = useHistory();

  return (
    <AuthContainer>
      <Heading>Log In</Heading>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(values) => {
          console.log(`Logging in user ${values.email}`);
          localStorage.setItem('isLoggedIn', JSON.stringify(true));
          history.push('/');
        }}
      >
        {(formikProps) => (
          <AuthForm>
            <AuthFormField
              name="email"
              type="email"
              label="Email"
              required
              onChange={formikProps.handleChange}
            />

            <AuthFormField
              name="password"
              type="password"
              label="Password"
              required
              onChange={formikProps.handleChange}
            />

            <AuthButton value="Log In" centered />
          </AuthForm>
        )}
      </Formik>

      <OAuthSeparator>or</OAuthSeparator>

      {/* TODO: Add Login with Facebook and Google buttons */}
    </AuthContainer>
  );
};

export default Login;
