import React from 'react';
import styled from 'styled-components';
import slika1 from '../assets/DSC_9937-1281x1280.jpg';
import slika2 from '../assets/Pam1285_Cat_Dett02_B_2389465-960x960.jpg';

const Elektro = () => {
  return (
    <Container>
      <HalfScreen>
        <ImageWrapper>
          <Image src={slika1} alt="Slika 1" />
          <Content>
            <Title>BRABUS x KTM</Title>
            <Button>Discover Now</Button>
          </Content>
        </ImageWrapper>
      </HalfScreen>
      <HalfScreen>
        <ImageWrapper>
          <Image src={slika2} alt="Slika 2" />
          <Content>
            <Title>BRABUS X Panerai</Title>
            <Button>Discover Now</Button>
          </Content>
        </ImageWrapper>
      </HalfScreen>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const HalfScreen = styled.div`
  flex: 1;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 85%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  
`;

const Title = styled.h1`
  font-size: 32px;
  color: white;
  letter-spacing: 1.92px;
  text-transform: uppercase;
  font-weight: 300;
  font-family: FF DIN,sans-serif;
  line-height: 20px;
  margin:10px;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color:#b70826; 
    border-color: #b70826;
    color:white;
  }
  
`;

export default Elektro;