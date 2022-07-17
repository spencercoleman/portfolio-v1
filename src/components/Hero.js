import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styled from "styled-components";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    margin-bottom: 10px;

    .details {
        margin-top: 0;
        display: grid;
        gap: 10px;
    }

    a {
        color: var(--color-jelly);
        font-weight: 700;
    }
`;

const Hero = () => {
    const heroRef= useRef(null);
    const { enterCount } = useInViewport(heroRef);

    return (
        <HeroSection ref={heroRef}>
            <h1>Hi, I'm Spencer.</h1>
            <h2>
                <RoughNotation type="bracket" brackets={['left', 'right']} color="var(--color-dove)" strokeWidth={3} padding={3} show={enterCount}>
                    Developer & Product Manager
                </RoughNotation>
            </h2>
            <div className="details">
                <RoughNotationGroup show={enterCount}>
                    <p>
                        I'm on a mission to create <RoughNotation type="underline" color="var(--color-paarl)" strokeWidth={2} iterations={1} padding={2} multiline>simple, intuitive, and delightful products</RoughNotation>.
                    </p>
                    <p>
                        Currently building tools to solve global payment pain points at {' '} 
                        <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} iterations={3}>
                            <a href="https://www.paymentlabs.io/" target="_blank" rel="noreferrer">Payment Labs</a>
                        </RoughNotation>. 
                    </p>
                </RoughNotationGroup>
            </div>
            
        </HeroSection>
    );
}
    
export default Hero;