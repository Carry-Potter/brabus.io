import React from 'react';
import styled from 'styled-components';
import { Facebook, YouTube, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterItem>
        <FooterTitle>PRIVACY POLICY</FooterTitle>
        <FooterSubtitle>TERMS</FooterSubtitle>
        <FooterIcon as={Facebook} sx={{ fontSize: 80 }}/>
        <FooterText>BRABUS</FooterText>
      </FooterItem>
      <FooterItem>
        <FooterTitle>Find a Dealer</FooterTitle>
        <FooterSubtitle>Career</FooterSubtitle>
        <FooterIcon as={YouTube} sx={{ fontSize: 80 }}/>
        
        <FooterText>BRABUS</FooterText>
      </FooterItem>
      <FooterItem>
        <FooterTitle>Contact</FooterTitle>
        <FooterSubtitle>About us</FooterSubtitle>
        <FooterIcon as={Instagram} sx={{ fontSize: 80 }}/>
        <FooterText>BRABUS</FooterText>
      </FooterItem>
      <FooterItem>
        <FooterTitle>Imprint</FooterTitle>
        <FooterSubtitle>Cookie Settings</FooterSubtitle>
        <FooterIcon as={LinkedIn} sx={{ fontSize: 80 }}/>
        <FooterText>BRABUS GmbH</FooterText>
      </FooterItem>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  margin: 0 20px;
`;

const FooterTitle = styled.h3`
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;

  &:hover {
    color: #b70826;
  }
`;

const FooterSubtitle = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
  padding: 20px;

  &:hover {
    color: #b70826;
  }
`;

const FooterIcon = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 5px;
  font-size: 64px;
  margin-bottom: 5px;
  &:hover {
    color: #b70826;
  }
  
`;

const FooterText = styled.p`
  font-size: 14px;

  &:hover {
    color: #b70826;
  }
`;

export default Footer;
