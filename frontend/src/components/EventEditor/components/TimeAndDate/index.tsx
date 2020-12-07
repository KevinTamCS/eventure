import React from 'react';
import { FormikProps } from 'formik';
import { EventForm } from 'components/EventEditor';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LabeledSelect from 'components/LabeledSelect';
import updateFormikForm from 'utils/updateFormikForm';
import { timeZoneOptions } from '../../eventMetadata';
import { Fieldset, FormSection, Legend, StyledCol } from '../../styles';
import { StyledDateOrTimeInput } from './styles';

interface Props {
  formikProps: FormikProps<EventForm>;
}

const TimeAndDate: React.FC<Props> = (props) => {
  const { formikProps } = props;

  return (
    <FormSection>
      <Fieldset>
        <Legend>Time and Date</Legend>

        {/* Start Time and Date */}
        <Row>
          <StyledCol md>
            <StyledDateOrTimeInput
              name="startDate"
              type="date"
              label="Start Date*"
              formSection="timeAndDate"
              formikProps={formikProps}
              placeholder="&nbsp;"
              value={formikProps.values.timeAndDate.startDate}
              required
            />
          </StyledCol>
          <Col md>
            <StyledDateOrTimeInput
              name="startTime"
              type="time"
              label="Start Time*"
              formSection="timeAndDate"
              formikProps={formikProps}
              value={formikProps.values.timeAndDate.startTime}
              required
            />
          </Col>
        </Row>

        {/* End Time and Date */}
        <Row>
          <StyledCol md>
            <StyledDateOrTimeInput
              name="endDate"
              type="date"
              label="End Date*"
              formSection="timeAndDate"
              formikProps={formikProps}
              value={formikProps.values.timeAndDate.endDate}
              required
            />
          </StyledCol>
          <Col md>
            <StyledDateOrTimeInput
              name="endTime"
              type="time"
              label="End Time*"
              formSection="timeAndDate"
              formikProps={formikProps}
              value={formikProps.values.timeAndDate.endTime}
              required
            />
          </Col>
        </Row>

        <>
          <LabeledSelect
            name="timeZone"
            type="Select"
            label="Time Zone*"
            options={timeZoneOptions}
            placeholder="Time Zone..."
            formSection="timeAndDate"
            required
            onChange={(option) =>
              updateFormikForm(formikProps, option, 'timeAndDate', 'timeZone')
            }
          />
        </>
      </Fieldset>
    </FormSection>
  );
};

export default TimeAndDate;
