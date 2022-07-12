import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    h1 {
        font-size: clamp(40px, 7vw, 60px);
        margin: 0.25rem 0;
    }

    h2 {
        font-size: clamp(35px, 6.5vw, 55px);
        margin: 0.25rem 0;
    }
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