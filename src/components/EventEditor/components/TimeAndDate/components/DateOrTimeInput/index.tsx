import React from 'react';
import FormField from 'components/FormField';
import {
  DatePicker,
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import DateUtils from '@date-io/moment';
import { FormikProps } from 'formik';
import { EventForm } from 'components/EventEditor';

interface DateOrTimeInputProps {
  formikProps: FormikProps<EventForm>;
  name: string;
  type: string;
  label: string;
  value: Date;
  formSection: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const testForDateInput = (): boolean => {
  const input = document.createElement('input');
  input.setAttribute('type', 'date');
  return input.type === 'date';
};

const testForTimeInput = (): boolean => {
  const input = document.createElement('input');
  input.setAttribute('type', 'time');
  return input.type === 'time';
};

const supportsDateInput: boolean = testForDateInput();
const supportsTimeInput: boolean = testForTimeInput();

/**
 * Returns an input tag for a date or time. Returns the native date and
 * time picker for supported browsers and the material date and time picker for
 * unsupported browsers.
 */
const DateOrTimeInput: React.FC<DateOrTimeInputProps> = (
  props
): JSX.Element => {
  const {
    formikProps,
    name,
    type,
    label,
    value,
    formSection,
    placeholder,
    className,
    required,
  } = props;

  const fieldId = formSection ? `${formSection}-${name}` : name;

  if (supportsDateInput && supportsTimeInput && name) {
    return (
      <FormField
        name={name}
        type={type}
        label={label}
        formSection={formSection}
        placeholder={placeholder}
        className={className}
        onChange={formikProps.handleChange}
        required={required}
      />
    );
  } else {
    if (type === 'date') {
      return (
        <>
          <label htmlFor={fieldId} className="d-block">
            {label}
          </label>
          <MuiPickersUtilsProvider utils={DateUtils}>
            <DatePicker
              id={fieldId}
              value={value}
              placeholder={placeholder}
              className={className}
              required={required}
              onChange={(value) =>
                formikProps.setFieldValue(`${formSection}.${name}`, value)
              }
            />
          </MuiPickersUtilsProvider>
        </>
      );
    } else if (type === 'time') {
      return (
        <>
          <label htmlFor={fieldId} className="d-block">
            {label}
          </label>
          <MuiPickersUtilsProvider utils={DateUtils}>
            <TimePicker
              id={fieldId}
              value={value}
              placeholder={placeholder}
              className={className}
              required={required}
              onChange={(value) =>
                formikProps.setFieldValue(`${formSection}.${name}`, value)
              }
            />
          </MuiPickersUtilsProvider>
        </>
      );
    } else {
      return <></>;
    }
  }
};

export default DateOrTimeInput;
