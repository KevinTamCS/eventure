import styled from 'styled-components/macro';
import { Button } from 'components/Button';

export const SaveForLaterButton = styled(Button)`
  margin: 0 auto;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  color: #302cde;
  background-color: #e7edff;

  &:hover {
    color: #302cde;
    background-color: #edf0ff;
  }

  &&&:active {
    color: #302cde;
    background-color: #d1dcff;
  }

  &&:focus {
    color: #302cde;
    background-color: #d8dfff;
  }
`;
