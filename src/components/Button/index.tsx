import React from 'react';
import {
  StyledAnchor,
  AnchorProps,
  StyledLink,
  LinkProps,
  StyledButton,
  ButtonProps,
  StyledSubmit,
  SubmitProps,
} from 'components/Button/styles';

export const AnchorButton: React.FC<AnchorProps> = ({
  href,
  className,
  centered,
  children,
}) => {
  return (
    <StyledAnchor href={href} className={className} centered={centered}>
      {children}
    </StyledAnchor>
  );
};

export const LinkButton: React.FC<LinkProps> = ({
  to,
  className,
  centered,
  children,
}) => {
  return (
    <StyledLink to={to} className={className} centered={centered}>
      {children}
    </StyledLink>
  );
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className,
  centered,
  children,
}) => {
  return (
    <StyledButton onClick={onClick} className={className} centered={centered}>
      {children}
    </StyledButton>
  );
};

export const SubmitButton: React.FC<SubmitProps> = ({
  value,
  className,
  centered,
  children,
}) => {
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
