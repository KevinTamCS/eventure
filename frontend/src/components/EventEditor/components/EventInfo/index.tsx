import React, { useState } from 'react';
import { FormikProps } from 'formik';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import updateFormikForm from 'utils/updateFormikForm';
import FormField from 'components/FormField';
import LabeledSelect from 'components/LabeledSelect';
import { EventForm } from 'components/EventEditor';
import {
  eventCategoryOptions,
  formatOptions,
  languageOptions,
  OrganizerOptions,
  Organizers,
} from '../../eventMetadata';
import { OrganizerNameFormField } from './styles';
import { Fieldset, FormSection, Legend, StyledCol } from '../../styles';

interface Props {
  formikProps: FormikProps<EventForm>;
}

const EventInfo: React.FC<Props> = (props) => {
  const { formikProps } = props;

  return (
    <FormSection>
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
    </FormSection>
  );
};

export default EventInfo;
