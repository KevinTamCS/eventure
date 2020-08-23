import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { AnchorProps, ButtonProps, LinkProps, SubmitProps } from './index';

const ButtonStyles = css`
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

export const StyledAnchor = styled.a<AnchorProps>`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  ${ButtonStyles}
`;

export const StyledLink = styled(Link)<LinkProps>`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  ${ButtonStyles}
`;

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  ${ButtonStyles}
`;

export const StyledSubmit = styled.input<SubmitProps>`
  ${(props) => (props.centered ? 'margin: 0 auto' : '')};
  ${ButtonStyles}
`;
