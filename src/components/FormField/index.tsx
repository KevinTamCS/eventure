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

const FormField: React.FC<Props> = (props) => {
  const {
    name,
    type,
    label,
    description,
    placeholder,
    required = false,
    className,
  } = props;

  return (
    <FormFieldContainer className={className}>
      <Label htmlFor={name}>{label}</Label>
      {description ? <Description>{description}</Description> : ''}
      <StyledField
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
      />
      <StyledErrorMessage name={name} />
    </FormFieldContainer>
  );
};

export default FormField;
