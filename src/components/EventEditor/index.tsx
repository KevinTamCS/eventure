import React from 'react';
import { FormikProps } from 'formik';
import { EventCategories, Formats } from './eventMetadata';
import EventInfo from './components/EventInfo';
import TimeAndDate from './components/TimeAndDate';
import Banner from './components/Banner';
import Details from './components/Details';

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

export const initialValues: EventForm = {
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

interface Props {
  formikProps: FormikProps<EventForm>;
}

const EventEditor: React.FC<Props> = (props): JSX.Element => {
  const { formikProps } = props;

  return (
    <>
      <EventInfo formikProps={formikProps} />
      <TimeAndDate formikProps={formikProps} />
      <Banner formikProps={formikProps} />
      <Details formikProps={formikProps} />
    </>
  );
};

export default EventEditor;
