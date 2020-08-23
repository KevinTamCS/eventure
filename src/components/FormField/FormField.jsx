import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Field } from 'formik';

const Container = styled.div`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  display: flex;
  flex-direction: column;
  ${(props) => (props.marginBottom ? 'margin-bottom: 1rem' : '')};
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: #585858;
`;

const InputField = styled(Field)`
  border: 2px solid #bababa;
  border-radius: 4px;
  padding: 0.5rem;
`;

const FormField = (props) => {
  return (
    <Container
      className={props.className}
      centered={props.centered}
      marginBottom={props.marginBottom}
    >
      <Label htmlFor={props.labelFor}>{props.children}</Label>
      <InputField
        name={props.inputName}
        type={props.inputType}
        required={props.required}
      />
    </Container>
  );
};

FormField.propTypes = {
  className: propTypes.string,
  centered: propTypes.bool,
  marginBottom: propTypes.bool,
  labelFor: propTypes.string.isRequired,
  children: propTypes.any,
  inputName: propTypes.string.isRequired,
  inputType: propTypes.string.isRequired,
  required: propTypes.bool,
};

FormField.defaultProps = {
  required: false,
};

export default FormField;
