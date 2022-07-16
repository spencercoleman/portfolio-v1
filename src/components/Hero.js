import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
`;

const Hero = () => {
    return (
        <HeroSection>
            <h1>Hi, I'm Spencer.</h1>
            <h2>Software Engineer & Product Manager</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </HeroSection>
    );
}
    
export default Hero;