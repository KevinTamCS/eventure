import React from 'react';
import {
  StyledAnchor,
  StyledLink,
  StyledButton,
  StyledSubmit,
} from 'components/Button/styles';

interface CommonProps {
  centered?: boolean;
  className?: string;
  children?: any;
}

export interface AnchorProps extends CommonProps {
  href: string;
}

export interface LinkProps extends CommonProps {
  to: string;
}

export interface ButtonProps extends CommonProps {
  onClick: () => void;
}

export interface SubmitProps extends CommonProps {
  value: string;
}

export const AnchorButton: React.FC<AnchorProps> = (props) => {
  const { href, className, centered, children } = props;

  return (
    <StyledAnchor href={href} className={className} centered={centered}>
      {children}
    </StyledAnchor>
  );
};

export const LinkButton: React.FC<LinkProps> = (props) => {
  const { to, className, centered, children } = props;

  return (
    <StyledLink to={to} className={className} centered={centered}>
      {children}
    </StyledLink>
  );
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, className, centered, children } = props;

  return (
    <StyledButton onClick={onClick} className={className} centered={centered}>
      {children}
    </StyledButton>
  );
};

export const SubmitButton: React.FC<SubmitProps> = (props) => {
  const { value, className, centered, children } = props;

  return (
    <StyledSubmit
      type="submit"
      value={value}
      className={className}
      centered={centered}
    >
      {children}
    </StyledSubmit>
  );
};
