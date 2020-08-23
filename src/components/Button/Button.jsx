// @flow
import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledButton } from 'components/Button/styles';

const Button = (props) => {
  // Anchor tag
  if (props.href) {
    return (
      <StyledButton
        as="a"
        href={props.href}
        className={props.className}
        centered={props.centered}
        fillWidth={props.fillWidth}
      >
        {props.children}
      </StyledButton>
    );
    // React Router Link component
  } else if (props.to) {
    return (
      <StyledButton
        as={Link}
        to={props.to}
        className={props.className}
        centered={props.centered}
        fillWidth={props.fillWidth}
      >
        {props.children}
      </StyledButton>
    );
    // Regular button
  } else if (props.onClick) {
    return (
      <StyledButton
        as="button"
        onClick={props.onClick}
        className={props.className}
        centered={props.centered}
        fillWidth={props.fillWidth}
      >
        {props.children}
      </StyledButton>
    );
    // Submit input type
  } else if (props.value) {
    return (
      <StyledButton
        as="input"
        type="submit"
        value={props.value}
        className={props.className}
        centered={props.centered}
        fillWidth={props.fillWidth}
      />
    );
    // Generic fallback button
  } else {
    return (
      <StyledButton as="button" {...props}>
        {props.children}
      </StyledButton>
    );
  }
};

Button.propTypes = {
  href: propTypes.string,
  to: propTypes.string,
  onClick: propTypes.func,
  value: propTypes.string,
  className: propTypes.string,
  centered: propTypes.bool,
  fillWidth: propTypes.bool,
  children: propTypes.any,
};

export default Button;
