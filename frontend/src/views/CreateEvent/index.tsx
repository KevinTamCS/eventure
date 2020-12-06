import React from 'react';
import { Formik } from 'formik';
import EventEditor, { initialValues } from 'components/EventEditor';
import { Heading, PageContainer } from 'globalStyles';
import { EventSubmitButton, StyledForm } from 'components/EventEditor/styles';
import { API_URL } from '../../index';
// import { SaveForLaterButton } from './styles';

const CreateEvent: React.FC = (): JSX.Element => {
  return (
    <PageContainer fluid="lg">
      <Heading>Create New Event</Heading>

      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.log(JSON.stringify(values));
          // console.log(JSON.stringify(values, null, 1));

          await fetch(`${API_URL}/events`, {
            method: 'POST',
            cache: 'no-cache',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
          });
        }}
      >
        {(formikProps) => {
          // const saveEventForLater = (): void => {
          //   console.log('Saving event for later');
          //   console.log(JSON.stringify(formikProps.values, null, 1));
          // };

          return (
            <StyledForm>
              <EventEditor formikProps={formikProps} />
              <div>
                <EventSubmitButton value="Create Event" />
                {/*<SaveForLaterButton onClick={saveEventForLater}>*/}
                {/*  Save For Later*/}
                {/*</SaveForLaterButton>*/}
              </div>
            </StyledForm>
          );
        }}
      </Formik>
    </PageContainer>
  );
};

export default CreateEvent;
