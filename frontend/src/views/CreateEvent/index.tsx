import React from 'react';
import { Formik } from 'formik';
import EventEditor, { initialValues } from 'components/EventEditor';
import { Heading, PageContainer } from 'globalStyles';
import { EventSubmitButton, StyledForm } from 'components/EventEditor/styles';
import { SaveForLaterButton } from './styles';

const CreateEvent: React.FC = (): JSX.Element => {
  return (
    <PageContainer fluid="lg">
      <Heading>Create New Event</Heading>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Submitted form');
          console.log(JSON.stringify(values, null, 1));
          console.log(values.banner.bannerImage);
        }}
      >
        {(formikProps) => {
          const saveEventForLater = (): void => {
            console.log('Saving event for later');
            console.log(JSON.stringify(formikProps.values, null, 1));
          };

          return (
            <StyledForm>
              <EventEditor formikProps={formikProps} />
              <div>
                <EventSubmitButton value="Create Event" />
                <SaveForLaterButton onClick={saveEventForLater}>
                  Save For Later
                </SaveForLaterButton>
              </div>
            </StyledForm>
          );
        }}
      </Formik>
    </PageContainer>
  );
};

export default CreateEvent;
