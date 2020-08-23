// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import BootstrapButton from 'react-bootstrap/Button';

export const StyledButton = styled(BootstrapButton)`
  ${(props) => (props.centered ? 'margin: 0 auto;' : '')};
  display: block;
  width: 12.5rem;
  padding: 1rem;
  color: #fff;
  font-weight: bold;
  background-color: #008aff;
  border-radius: 0.25rem;
  text-decoration: none;
  text-align: center;
  font-size: 1.25rem;
  transition: 0.2s;
  transition-timing-function: ease-in-out;
  outline: none;
  border: none;

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #3aa4ff;
  }

  &:active {
    background-color: #1691ff;
  }
`;

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

Button.propTypes = {
  centered: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.any,
};

export default Button;
