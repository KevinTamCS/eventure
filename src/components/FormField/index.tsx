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
  formSection?: string;
  component?: React.Component;
  onChange: (event: React.ChangeEvent) => void;
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
    formSection,
    component,
    onChange,
    className,
  } = props;

  const fieldName = formSection ? `${formSection}.${name}` : name;
  const fieldId = formSection ? `${formSection}-${name}` : name;

  return (
    <FormFieldContainer className={className}>
      <Label htmlFor={fieldId}>{label}</Label>
      {description ? <Description>{description}</Description> : ''}
      <StyledField
        name={fieldName}
        id={fieldId}
        type={type}
        placeholder={placeholder}
        component={component}
        onChange={onChange}
        required={required}
      />
      <StyledErrorMessage name={name} />
    </FormFieldContainer>
  );
};

export default FormField;
