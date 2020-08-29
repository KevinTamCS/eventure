import React from 'react';
import { Formik } from 'formik';
import EventInfo from './components/EventInfo';
import TimeAndDate from './components/TimeAndDate';
import Banner from './components/Banner';
import Details from './components/Details';
import { EventCategories, Formats } from './eventMetadata';
import {
  CreateEventContainer,
  CreateEventForm,
  FormButtonsContainer,
  Heading,
  SaveForLaterButton,
  SubmitFormButton,
} from './styles';

export interface EventForm {
  eventInfo: {
    title: string;
    organizer: string;
    organizerName?: string;
    category?: EventCategories;
    format?: Formats;
    language?: string;
    tags?: string[];
  };
  timeAndDate: {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    timeZone: Record<string, unknown>;
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
    <CreateEventContainer fluid="lg">
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
            <CreateEventForm>
              <EventInfo formikProps={formikProps} />
              <TimeAndDate formikProps={formikProps} />
              <Banner formikProps={formikProps} />
              <Details formikProps={formikProps} />
              <FormButtonsContainer>
                <SubmitFormButton value="Create Event" />
                <SaveForLaterButton onClick={saveEventForLater}>
                  Save For Later
                </SaveForLaterButton>
              </FormButtonsContainer>
            </CreateEventForm>
          );
        }}
      </Formik>
    </CreateEventContainer>
  );
};

export default CreateEvent;
