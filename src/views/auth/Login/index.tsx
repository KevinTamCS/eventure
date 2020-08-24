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
        <AuthForm>
          <AuthFormField name="email" type="email" label="Email" required />

          <AuthFormField
            name="password"
            type="password"
            label="Password"
            required
          />

          <AuthButton value="Log In" centered />
        </AuthForm>
      </Formik>

      <OAuthSeparator>or</OAuthSeparator>

      {/* TODO: Add Login with Facebook and Google buttons */}
    </AuthContainer>
  );
};

export default Login;
