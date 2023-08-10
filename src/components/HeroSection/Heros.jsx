import React, { Suspense } from "react";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import CV from '../../assets/cv.pdf'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;


const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  max-width: 1400px; /* Set max-width to prevent container from growing too large on wide screens */
  width: 100%; /* Use 100% width for responsive behavior on smaller screens */
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    /* Apply changes for smaller screens here */
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: 2rem;
    font-size: 50px ;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;



const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    /* Apply changes for smaller screens here */
    flex:1;
  }
`;


const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 1s infinite ease alternate;
 
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Heros = () => {
  return (
    <Section>
        
      <Container className="container header_container">
        <Left>
          <Title>Hello there. I'm ANNABI BADR</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>
            I enjoy creating delightful, Web apps by using my knowledge and my skills.
          </Desc>
            <div className='cta'>
              <a href={CV} download className='btn'>Download CV</a>
              <a href='#contact' className='btn btn-primary'> Let's Talk</a>
            </div>
        </Left>
        <Right>
          {/*3D MODEL */}
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere  args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#8e58b0"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
        <a href='#contact' className='scroll_down'> Scroll Down</a>
        <div className='header_socials'>
        <a href='https://linkedin.com'rel="noreferrer" target='_blank'><BsLinkedin /></a>
        <a href='https://github.com' rel="noreferrer" target='_blank'><FaGithub /></a>
        <a href='https://dribble.com'rel="noreferrer" target='_blank'> <BsInstagram /></a>
    </div>
      </Container>
      
    </Section>
  );
};

export default Heros;