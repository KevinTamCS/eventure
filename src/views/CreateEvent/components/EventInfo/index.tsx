import React, { useState } from 'react';
import { FormikProps } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormField from 'components/FormField';
import LabeledSelect from 'components/LabeledSelect';
import { CreateEventForm } from '../../index';
import {
  eventCategoryOptions,
  formatOptions,
  languageOptions,
  OrganizerOptions,
  Organizers,
} from '../../eventMetadata';
import {
  EventInfoSection,
  Fieldset,
  Legend,
  OrganizerNameFormField,
  StyledCol,
} from './styles';
import { OptionTypeBase } from 'react-select';

interface Props {
  formikProps: FormikProps<CreateEventForm>;
}

/**
 * Updates a Formik form field from a react-select menu given the Formik form props and the react-select menu option(s).
 * @param formikProps - The Formik form props.
 * @param option - The react-select menu option(s).
 * @param formSection - The section of the form that the field is in.
 * @param fieldName - The name of the field to update.
 */
const updateFormikForm = (
  formikProps: FormikProps<CreateEventForm>,
  option: OptionTypeBase | null | undefined,
  formSection: string,
  fieldName: string
): void => {
  // Check if option is null or undefined
  if (option) {
    // Check if option is a single or multi select menu
    if (Array.isArray(option)) {
      // Multi select menu
      const optionObject = option as Record<string, unknown>[];

      const options: string[] = [];
      optionObject.forEach((option: Record<string, unknown>) => {
        options.push(option.value as string);
      });
      formikProps.setFieldValue(`${formSection}.${fieldName}`, options);
    } else {
      // Single select menu
      const optionObject = option as Record<string, unknown>;
      formikProps.setFieldValue(
        `${formSection}.${fieldName}`,
        optionObject.value
      );
    }
  }
};

const EventInfo: React.FC<Props> = (props) => {
  const { formikProps } = props;

  const firstName: string = localStorage.getItem('firstName') as string;
  const lastName: string = localStorage.getItem('lastName') as string;

  const organizerOptions: OrganizerOptions[] = [
    {
      value: Organizers.User,
      label: `Me (${firstName} ${lastName})`,
    },
    {
      value: Organizers.Other,
      label: 'Other Organizer (Enter Name Below)',
    },
  ];

  const [organizer, setOrganizer] = useState<Organizers>();

  return (
    <EventInfoSection>
      <Fieldset>
        <Legend>Event Info</Legend>

        <FormField
          name="title"
          type="text"
          label="Title*"
          placeholder="Aim for a short, descriptive title."
          formSection="eventInfo"
          required
          onChange={formikProps.handleChange}
        />

        {/* Organizer Group */}
        <div>
          <LabeledSelect
            name="organizer"
            type="Select"
            label="Organizer*"
            options={organizerOptions}
            placeholder="Organizer..."
            formSection="eventInfo"
            onChange={(option) => {
              if (option) {
                const optionObject = option as Record<string, unknown>;
                formikProps.setFieldValue(
                  'eventInfo.organizer',
                  optionObject.value
                );

                // Update organizer
                if (optionObject.value === 'OTHER') {
                  setOrganizer(Organizers.Other);
                } else {
                  setOrganizer(Organizers.User);
                }
              }
            }}
          />
          {/* Display other organizer name only if the user selected "Other Organizer" */}
          {organizer === Organizers.Other && (
            <OrganizerNameFormField
              name="organizerName"
              type="text"
              placeholder="Organizer Name*"
              formSection="eventInfo"
              onChange={formikProps.handleChange}
            />
          )}
        </div>

        {/* Category and Format Group */}
        <Row>
          <StyledCol md>
            <LabeledSelect
              name="category"
              type="Select"
              label="Category"
              options={eventCategoryOptions}
              placeholder="Category..."
              formSection="eventInfo"
              onChange={(option) =>
                updateFormikForm(formikProps, option, 'eventInfo', 'category')
              }
            />
          </StyledCol>
          <Col md>
            <LabeledSelect
              name="format"
              type="Select"
              label="Format"
              options={formatOptions}
              placeholder="Format..."
              formSection="eventInfo"
              onChange={(option) =>
                updateFormikForm(formikProps, option, 'eventInfo', 'format')
              }
            />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <LabeledSelect
              name="language"
              type="Select"
              label="Language"
              options={languageOptions}
              placeholder="Language..."
              formSection="eventInfo"
              onChange={(option) =>
                updateFormikForm(formikProps, option, 'eventInfo', 'language')
              }
            />
          </Col>
        </Row>

        <LabeledSelect
          name="tags"
          type="CreatableSelect"
          label="Tags"
          placeholder="Type in tags to add them."
          formSection="eventInfo"
          onChange={(option) => {
            updateFormikForm(formikProps, option, 'eventInfo', 'tags');
          }}
        />
      </Fieldset>
    </EventInfoSection>
  );
};

export default EventInfo;
