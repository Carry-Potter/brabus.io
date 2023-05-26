import React from 'react';
import styled from 'styled-components';
import slika2 from '../assets/20220516-20220516_Brabus_days_3613.jpg';
import slika1 from '../assets/231021Brabus_075sw_quer-2.jpg';

const Media = () => {
  return (
    <Container>
      <HalfScreen>
        <ImageWrapper>
          <Image src={slika1} alt="Slika 1" />
          <Content>
            <Title>INSTagram
            
            </Title>
            <Title >@constantin_brabus</Title>
            
            <Button>Follow now</Button>
          </Content>
        </ImageWrapper>
      </HalfScreen>
      <HalfScreen>
        <ImageWrapper>
          <Image src={slika2} alt="Slika 2" />
          <Content>
            <Title>YOUTUBE </Title>
            <Title>@constantin_brabus</Title>
           
            <Button>Follow now</Button>
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
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);
  text-align: center;
  
`;

const Title = styled.h1`
  font-size: 22px;
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
    color: white;
  }
  
`;

export default Media;