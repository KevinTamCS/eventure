import styled, { css } from 'styled-components/macro';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

export const Label = styled.label`
  font-size: 1.25rem;
  color: #585858;
`;

const selectStyles = css`
  .react-select__control {
    border: 2px solid #bababa;
    border-radius: 4px;
  }
`;

export const StyledSelect = styled(Select)`
  ${selectStyles}
`;

export const StyledCreatableSelect = styled(CreatableSelect)`
  ${selectStyles}
`;
