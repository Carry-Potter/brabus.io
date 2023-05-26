import React, { useState } from 'react';
import video from '../assets/BRBAUS.mp4';
import styled from 'styled-components';
import video1 from '../assets/BRABUS EQS58 Commercial_WEBTEASER.mp4';
import video2 from '../assets/BRABUS GLS 900_10Sek_Webteaser_mit Dreieck.mp4';
import video3 from '../assets/BRABUS 900 Deep Blue_10sek_Webteaser_H264_WEBTEASER_Benutzerdefiniert_WEBTEASER.mp4';
import video4 from '../assets/BRABUS_1300R_Website_10sel_Teaser_.mp4'

const videos = [
  {
    src: video,
    title: 'Striking power - go beyond.',
    buttonText: 'BRABUS 930',
  },
  {
    src: video1,
    title: 'ELECTRIFIED - HOW IT SHOULD BE',
    buttonText: 'BRABUS FOR EQS 53',
  },
  {
    src: video2,
    title: 'Its Always better in black',
    buttonText: 'BRABUS 900 Superblack',
  },
  {
    src: video3,
    title: 'THE DEEP BLUE STATEMENT',
    buttonText: 'BRABUS 900 DEEP BLUE',
  },
  {
    src: video4,
    title: 'BRABUS 1300 R EDITION 23 ',
    buttonText: 'BRABUS X KTM',
  }
];

const Main = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const currentVideo = videos[currentVideoIndex];

  const changeVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
  };
  const handleVideoEnd = () => {
    changeVideo();
  };

  return (
    <Mains>
      <VideoWrapper>
      <Video src={currentVideo.src} autoPlay muted onEnded={handleVideoEnd} />
        <Content>
          <Title>{currentVideo.title}</Title>
          <Button1>{currentVideo.buttonText}</Button1>
        </Content>
        <Wrapper>
        <Button onClick={changeVideo.bind(null, 0)}>Prva linija</Button>
        <Button onClick={changeVideo.bind(null, 1)}>Druga linija</Button>
        <Button onClick={changeVideo.bind(null, 2)}>Treća linija</Button>
        <Button onClick={changeVideo.bind(null, 3)}>Četvrta linija</Button>
        <Button onClick={changeVideo.bind(null, 4)}>Peta linija</Button>
      </Wrapper>
      </VideoWrapper>
      <Wrapper>
        <Button onClick={changeVideo}>Promeni video</Button>
        <Button>Supercars</Button>
        <Button>Tuning</Button>
        <Button>Classics</Button>
        <Button>Cars4Sale</Button>
      </Wrapper>
    </Mains>
  );
};

const Mains = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: relative;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

const Title = styled.h1`
  color: white;
  font-size: 32px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 0 12px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #ffffff;
  text-align: center;
  cursor: pointer;
  color: black;
  letter-spacing: .96px;
  transition: all 0.3s ease;
  font-size: 16px;
  letter-spacing: 0.96px;
  padding: 0 0 4px;
  text-transform: uppercase;
  font-family: FF DIN,sans-serif;
  font-weight: 500;

  &:hover {
    color: #b70826;
  }

`;

const Button1 = styled.button`
  background-color: black;
  color: white;
  padding: 12px 24px;
  border: none;

  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: #b70826;
  }
`;

const Wrapper = styled.nav`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ffffff;
  padding-left: 50px;
  padding-right: 50px;
`;

export default Main;