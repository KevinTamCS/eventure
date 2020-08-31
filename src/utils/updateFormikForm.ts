import { FormikProps } from 'formik';
import { OptionTypeBase } from 'react-select';
import { EventForm } from 'components/EventEditor';

/**
 * Updates a Formik form field from a react-select menu given the Formik form props and the react-select menu option(s).
 * @param formikProps - The Formik form props.
 * @param option - The react-select menu option(s).
 * @param formSection - The section of the form that the field is in.
 * @param fieldName - The name of the field to update.
 */
const updateFormikForm = (
  formikProps: FormikProps<EventForm>,
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

export default updateFormikForm;
