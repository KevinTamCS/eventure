import React from 'react';
import styled from 'styled-components/macro';

const Footer = styled.footer`
  padding: 2rem 0;
  text-align: center;
  background-color: #02004b;
  color: #fff;
`;

const Ending = () => {
  return <Footer>&copy; 2020 Kevin Tam</Footer>;
};

export default Ending;
