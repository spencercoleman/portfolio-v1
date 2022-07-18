import React, { useRef } from "react";
import { useInViewport } from 'react-in-viewport';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
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

    .company {
        color: var(--color-jelly);
        font-weight: 700;
    }

    ul {
        list-style: none;
        margin: 10px 0;
        padding: 0;
        font-size: var(--font-size-md);
        display: flex;
        gap: 20px;
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
                                <a className="company" href="https://www.paymentlabs.io/" target="_blank" rel="noreferrer">Payment Labs</a>
                            </RoughNotation>. 
                        </p>
                </div>
            </RoughNotationGroup>
            <ul>
                <li><a href="https://www.linkedin.com/in/spencercoleman" target="_blank" rel="noreferrer" aria-label="LinkedIn Profile"><BsLinkedin name="LinkedIn" /></a></li>
                <li><a href="https://github.com/spencercoleman" target="_blank" rel="noreferrer" aria-label="GitHub Profile"><BsGithub name="GitHub" /></a></li>
            </ul>
        </HeroSection>
    );
}
    
export default Hero;