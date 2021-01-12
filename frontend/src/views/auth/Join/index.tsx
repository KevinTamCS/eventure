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
import { API_ROOT } from '../../../index';
import { toast } from 'react-toastify';

const Join = (): JSX.Element => {
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
        onSubmit={(values, formikHelpers) => {
          try {
            console.log(JSON.stringify(values));
            fetch(`${API_ROOT}/join`, {
              method: 'POST',
              cache: 'no-cache',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            })
              .then((res) => {
                if (res.status === 200) {
                  console.log('ok');

                  localStorage.setItem('firstName', values.firstName);
                  localStorage.setItem('lastName', values.lastName);
                  localStorage.setItem('email', values.email);
                  localStorage.setItem('isLoggedIn', JSON.stringify(true));

                  history.push('/welcome');
                } else {
                  console.error(res.statusText);
                  toast.error(
                    'An error occurred while creating your account. Please try again.'
                  );
                  formikHelpers.setSubmitting(false);
                }
              })
              .catch((error) => {
                console.error(error);
                toast.error(
                  'An error occurred while creating your account. Please try again.'
                );
                formikHelpers.setSubmitting(false);
              });
          } catch (error) {
            console.error(error);
            toast.error(
              'An error occurred while creating your account. Please try again.'
            );
            formikHelpers.setSubmitting(false);
          }
        }}
      >
        {(formikProps) => (
          <AuthForm>
            <fieldset disabled={formikProps.isSubmitting}>
              <AuthFormField
                name="firstName"
                type="text"
                label="First Name"
                required
                onChange={formikProps.handleChange}
              />

              <AuthFormField
                name="lastName"
                type="text"
                label="Last Name"
                required
                onChange={formikProps.handleChange}
              />

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

              <AuthButton value="Get Started" centered />
            </fieldset>
          </AuthForm>
        )}
      </Formik>

      {/*<OAuthSeparator>or</OAuthSeparator>*/}

      {/* TODO: Add Continue with Facebook and Google buttons */}
    </AuthContainer>
  );
};

export default Join;
