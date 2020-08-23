import styled from 'styled-components/macro';
import BootstrapButton from 'react-bootstrap/Button';

// Styles for a button based on the Bootstrap button.
export const StyledButton = styled(BootstrapButton)`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #008aff;

  border-radius: 0.25rem;
  outline: none;
  border: none;

  font-size: 1.25rem;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-align: center;

  transition: 0.2s;
  transition-timing-function: ease-in-out;

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #3aa4ff;
  }

  &:active {
    background-color: #1691ff;
  }

  // 700px
  @media screen and (min-width: 43.75rem) {
    width: 12.5rem;
  }
`;
