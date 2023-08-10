import { MeshDistorMaterial, Sphere } from "@react-three/drei";
import React from "react";
import styled from "styled-components"
import ME from '../../assets/me.png'


const Hero = () => {
    return (
      <Section>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>ANNABI BADR</h1>
          <h5 className='text-light'>Fullstack Developer</h5> 
          <div className='me'>
          <Sphere args={[1,100,200]} scale={1} />
            <img src={ME} alt="me" />
            
          </div>
  
          <a href='#contact' className='scroll_down'> Scroll Down</a>
        </div>
      </Section>
  
    )
  }
  
  export default Hero