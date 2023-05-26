import React from 'react';
import styled from 'styled-components';
import slika1 from '../assets/BRABUS-930.jpg'
import slika2 from '../assets/BRABUS333.jpg'
import slika3 from '../assets/Mallorca-2022.jpg'
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding 80px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
  padding-top:40px;
  padding-bottom:20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const ImageWrapper = styled.div`
  margin: 10px;

`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Text = styled.p`
  text-align: center;
  color: #666;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  margin-top: 60px;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 20px;

  &:hover {
    background-color:#b70826; 
    border-color: #b70826;
  }
  
`;

const NewsAndEvents = () => {
  return (
    <Container>
      <Title>NEWS & EVENTS</Title>
      <ImageContainer>
        <ImageWrapper>
          <Image src={slika1} alt="Image 1" />
          <Text><h4>
            BRABUS 930 - Striking Power - Go Beyond.
        </h4>
            <p>- This next-level sports coupe based on the Mercedes-AMG GT 63 S E-Performance platform was …</p>
        </Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={slika2} alt="Image 2" />
          <Text><h4>
            BRABUS Marine - Available superboats
        </h4><p>
            The 2023 boating season is starting and we want to prepare you best with our products. BRABUS …
        </p></Text>
        </ImageWrapper>
        <ImageWrapper>
          <Image src={slika3} alt="Image 3" />
          <Text> <h4>
            BRABUS for Mercedes-AMG EQS 53 - Electrified – How it should be
        </h4>
        <p>
            - Fully electrified solutions are becoming more and more advanced, making the question of just what…
        </p>
        </Text>
        </ImageWrapper>
      </ImageContainer>
      <Button>DISCOVER MORE</Button>
</Container>
);
};

export default NewsAndEvents;