import styled from 'styled-components/macro';
import { ErrorMessage, Field } from 'formik';

export const FormFieldContainer = styled.div`
         ${(props) => (props.centered ? 'margin: 0 auto' : '')};
         display: flex;
         flex-direction: column;
       `;

export const Label = styled.label`
  font-size: 1.25rem;
  color: #585858;
`;

export const Description = styled.p``;

export const StyledField = styled(Field)`
  border: 2px solid #bababa;
  border-radius: 4px;
  padding: 0.5rem;
`;

export const StyledErrorMessage = styled(ErrorMessage)``;
