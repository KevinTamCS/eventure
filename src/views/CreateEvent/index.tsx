import React from 'react';
import { Formik } from 'formik';
import { SubmitButton } from 'components/Button';
import EventInfo from './components/EventInfo';
import { CreateEventContainer, Heading, StyledForm } from './styles';
import { EventCategories, Formats } from './eventMetadata';

export interface CreateEventForm {
  eventInfo: {
    title: string;
    organizer: string;
    organizerName?: string;
    category?: EventCategories;
    format?: Formats;
    language?: string; // enum of languages
    tags?: string[];
  };
  timeAndDate: {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    timeZone: string; // enum of timezones
  };
  banner: {
    bannerImage?: File;
  };
  details: {
    summary?: string;
    description?: string;
  };
}

const CreateEvent: React.FC = (): JSX.Element => {
  const initialValues: CreateEventForm = {
    eventInfo: {
      title: '',
      organizer: '',
      organizerName: undefined,
      category: undefined,
      format: undefined,
      language: undefined,
      tags: undefined,
    },
    timeAndDate: {
      startDate: new Date(0),
      startTime: new Date(0),
      endDate: new Date(0),
      endTime: new Date(0),
      timeZone: '',
    },
    banner: {
      bannerImage: undefined,
    },
    details: {
      summary: undefined,
      description: undefined,
    },
  };

  return (
    <CreateEventContainer fluid="lg">
      <Heading>Create New Event</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log('Submitted form');
          console.log(JSON.stringify(values, null, 1));
        }}
      >
        {(formikProps) => (
          <StyledForm>
            <EventInfo formikProps={formikProps}/>
            <SubmitButton value="Continue" />
          </StyledForm>
        )}
      </Formik>
    </CreateEventContainer>
  );
};

export default CreateEvent;
