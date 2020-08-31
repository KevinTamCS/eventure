import React from 'react';
import { FormikProps } from 'formik';
import FormField from 'components/FormField';
import { Fieldset, FormSection, Legend } from '../../styles';
import { EventForm } from 'components/EventEditor';

interface Props {
  formikProps: FormikProps<EventForm>;
}

const Details: React.FC<Props> = (props) => {
  const { formikProps } = props;
  return (
    <FormSection>
      <Fieldset>
        <Legend>Details</Legend>

        <FormField
          name="summary"
          type="text"
          label="Summary"
          placeholder="Up to 160 characters at most."
          formSection="details"
          onChange={formikProps.handleChange}
        />

        <div>
          <FormField
            name="description"
            component="textarea"
            label="Description"
            placeholder="Add a longer description about your event here."
            formSection="details"
            onChange={formikProps.handleChange}
            rows={10}
            cols={25}
          />
        </div>
      </Fieldset>
    </FormSection>
  );
};

export default Details;
