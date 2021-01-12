import React, { useState } from 'react';
import { Formik } from 'formik';
import EventEditor, { initialValues } from 'components/EventEditor';
import { Heading, PageContainer } from 'globalStyles';
import { EventSubmitButton, StyledForm } from 'components/EventEditor/styles';
import { API_ROOT } from '../../index';
import { Prompt, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useBeforeunload } from 'react-beforeunload';

const CreateEvent: React.FC = (): JSX.Element => {
  const history = useHistory();
  useBeforeunload(
    (event) =>
      'Your changes will not be saved if you leave this page. Continue?'
  );

  const [eventCreated, setEventCreated] = useState<boolean>(false);

  return (
    <PageContainer fluid="lg">
      <Heading>Create New Event</Heading>

      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          fetch(`${API_ROOT}/events`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
            .then((res) => {
              if (res.status !== 200) {
                console.error('Could not create event.');
                console.error(res.statusText);
                toast.error(
                  'An error occurred while creating your event. Please try again.'
                );
                return null;
              } else {
                return res.json();
              }
            })
            .then((data) => {
              if (data !== null) {
                // Navigate to the new event page if successfully created
                setEventCreated(true);
                history.push(`${data}`);
              }
            })
            .catch((error) => {
              console.error('Could not create event.');
              console.error(error);
              toast.error(
                'An error occurred while creating your event. Please try again.'
              );
              formikHelpers.setSubmitting(false);
            });
        }}
      >
        {(formikProps) => {
          return (
            <StyledForm>
              <EventEditor formikProps={formikProps} />
              <div style={{ marginTop: '1rem' }}>
                <EventSubmitButton
                  value={
                    formikProps.isSubmitting ? 'Creating...' : 'Create Event'
                  }
                  disabled={formikProps.isSubmitting}
                />
              </div>
            </StyledForm>
          );
        }}
      </Formik>
      <Prompt
        when={!eventCreated}
        message="Leave event creation? Your changes will not be saved."
      />
    </PageContainer>
  );
};

export default CreateEvent;
