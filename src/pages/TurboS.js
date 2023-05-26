import React from 'react';
import styled from 'styled-components';
import slika from '../assets/BRABUS-911TurboS.jpg'
import slika2 from '../assets/SMART.jpg'

const TurboS = () => {
  return (
    <>
      <TurboSPage
        backgroundImage={slika}
        title="BRABUS Refinement program"
        subtitle="for Porsche 911 Turbo (992)"
        button="Discover now"
      />
      <TurboSPage
        backgroundImage={slika2}
        title="the new smart #1 BRABUS"
        subtitle=""
        button="BRABUS x Smart"
      />
    </>
  );
};

const TurboSPage = ({ backgroundImage, title, subtitle,button }) => {
  return (
    <Container>
      <BackgroundImage src={backgroundImage} alt="Slika" />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Button>{button}</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin-bottom: 16px;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  font-weight: 300;
`;

const Subtitle = styled.p`
  font-size: 24px;
  color: black;
  margin-bottom: 32px;
  font-weight: 300;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color:#b70826; 
    border-color: #b70826;
  }
  
`;

export default TurboS;