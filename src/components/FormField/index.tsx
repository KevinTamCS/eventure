import React from 'react';
import {
  FormFieldContainer,
  Label,
  Description,
  StyledField,
  StyledErrorMessage,
} from './styles';

interface Props {
  name: string;
  type: string;
  label?: string;
  description?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}

const FormField: React.FC<Props> = ({ required = false, ...props }) => {
  return (
    <FormFieldContainer className={props.className}>
      <Label htmlFor={props.name}>{props.label}</Label>
      {props.description ? <Description>{props.description}</Description> : ''}
      <StyledField
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required={required}
      />
      <StyledErrorMessage name={props.name} />
    </FormFieldContainer>
  );
};

export default FormField;
