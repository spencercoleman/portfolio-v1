import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styled from "styled-components";

const HeroSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

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
    return (
        <HeroSection>
            <h1>Hi, I'm Spencer.</h1>
            <h2>
                <RoughNotation type="bracket" brackets={['left', 'right']} color="var(--color-dove)" strokeWidth={3} padding={3} show>
                    Developer & Product Manager
                </RoughNotation>
            </h2>
            <div className="details">
                <RoughNotationGroup>
                    <p>
                        I'm on a mission to create <RoughNotation type="underline" color="var(--color-paarl)" strokeWidth={2} iterations={1} padding={2} multiline show>simple, intuitive, and delightful products</RoughNotation>.
                    </p>
                    <p>
                        Currently building solutions for global payment pain points at <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} iterations={3} show><a href="https://www.paymentlabs.io/" target="_blank" rel="noreferrer">Payment Labs</a></RoughNotation>. 
                    </p>
                </RoughNotationGroup>
            </div>
            
        </HeroSection>
    );
}
    
export default Hero;