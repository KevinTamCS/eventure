import React from 'react';
import propTypes from 'prop-types';
import {
  FormFieldContainer,
  Label,
  Description,
  StyledField,
  StyledErrorMessage,
} from './styles';

const FormField = (props) => {
  return (
    <FormFieldContainer className={props.className}>
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.description ? <Description>{props.description}</Description> : ''}
      <StyledField
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={props.required}
      />
      <StyledErrorMessage name={props.name} />
    </FormFieldContainer>
  );
};

FormField.propTypes = {
  name: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  label: propTypes.string,
  description: propTypes.string,
  placeholder: propTypes.string,
  required: propTypes.bool,
  className: propTypes.string,
};

FormField.defaultProps = {
  required: false,
};

export default FormField;
