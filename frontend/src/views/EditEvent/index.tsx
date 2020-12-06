import React from 'react';
import { Formik } from 'formik';
import EventEditor, { EventForm } from 'components/EventEditor';
import { Heading, PageContainer } from 'globalStyles';
import { StyledForm, EventSubmitButton } from 'components/EventEditor/styles';

const EditEvent: React.FC = (): JSX.Element => {
  // Populate with event data from API
  const initialValues: EventForm = {
    eventInfo: {
      title: '',
      organizer: '',
      organizerName: '',
      category: undefined,
      format: undefined,
      language: undefined,
      tags: undefined,
    },
    timeAndDate: {
      startDate: new Date(),
      startTime: new Date(),
      endDate: new Date(),
      endTime: new Date(),
      timeZone: {},
    },
    banner: {
      bannerImage: undefined,
    },
    details: {
      summary: '',
      description: '',
    },
  };

  return (
    <PageContainer fluid="lg">
      <Heading>Edit Event</Heading>

      <Formik
        initialValues={initialValues}
        onSubmit={() => {
          console.log('Submitting form');
        }}
      >
        {(formikProps) => {
          return (
            <StyledForm>
              <EventEditor formikProps={formikProps} />
              <EventSubmitButton value="Save" />
            </StyledForm>
          );
        }}
      </Formik>
    </PageContainer>
  );
};

export default EditEvent;
