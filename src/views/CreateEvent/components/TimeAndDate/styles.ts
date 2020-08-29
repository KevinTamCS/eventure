import styled from 'styled-components/macro';
import FormField from 'components/FormField';
import DateOrTimeInput from './components/DateOrTimeInput';

export const OrganizerNameFormField = styled(FormField)`
  padding-top: 0.5rem;
`;

export const StyledDateOrTimeInput = styled(DateOrTimeInput)`
  // Safari only
  @media not all and (min-resolution: 0.001dpcm) {
    @media {
      input {
        margin: 0 auto;
        min-width: 92%;
      }
    }
  }
`;
