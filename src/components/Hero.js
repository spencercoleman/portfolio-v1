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
    padding-bottom: 125px;

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
                <RoughNotationGroup show={enterCount}>
                <h2>
                    <RoughNotation type="bracket" brackets={['left', 'right']} color="var(--color-dove)" strokeWidth={3} padding={3}>
                        Developer & Product Manager
                    </RoughNotation>
                </h2>
                <div className="details">
                        <p>
                            I'm on a mission to build {' '}
                            <RoughNotation type="underline" color="var(--color-paarl)" strokeWidth={2} iterations={1} padding={2} multiline>
                                delightful, user-friendly products
                            </RoughNotation>.
                        </p>
                        <p>
                            Currently developing tools to streamline global payments at {' '} 
                            <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} iterations={3}>
                                <a href="https://www.paymentlabs.io/" target="_blank" rel="noreferrer">Payment Labs</a>
                            </RoughNotation>. 
                        </p>
                </div>
            </RoughNotationGroup>
        </HeroSection>
    );
}
    
export default Hero;