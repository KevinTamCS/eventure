// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Button.scss';

const Button = (props) => {
  return (
    <Link
      to={props.to}
      className={`button${props.className ? ` ${props.className}` : ''}`}
    >
      {props.children}
    </Link>
  );
};

Button.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default Button;
