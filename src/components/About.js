import React, { useRef } from 'react';
import { useInViewport } from 'react-in-viewport';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import styled from "styled-components";

const AboutSection = styled.section`
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 25px;

    .tech-container {
        grid-column: 1 / 3;

        @media (min-width: 710px) {
            grid-column: 1 / 2;
        }
    }

    .tech-list {
        padding: 0;
        margin: 0;
        margin-block-end: 0;
        margin-top: 10px;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
    
        @media (min-width: 600px) {
            gap: 25px;
        }
    }
`;

const About = () => {
    const aboutRef= useRef(null);
    const { enterCount } = useInViewport(aboutRef);
    const technologies = ['JavaScript (ES6+),', 'Node.js,', 'React,', 'SQL,', 'Figma'];

    return (
        <AboutSection ref={aboutRef}>
            <RoughNotationGroup show={enterCount}>
                <p style={{gridColumn: '1 / 3'}}>
                    I work on innovative projects with a focus on {' '}
                    <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} padding={1} iterations={1}>
                        accessibility
                    </RoughNotation> and {' '} 
                    <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} padding={1} iterations={1} multiline>
                        user-centered design
                    </RoughNotation>. 
                    My passion is researching, prototyping, and developing features that {' '}
                    <RoughNotation type="underline" color="var(--color-paarl)" strokeWidth={2} padding={1} iterations={3} multiline>
                    empower individuals
                    </RoughNotation>.
                </p>
                <p style={{gridColumn: '1 / 3'}}>
                    Outside of work, I {' '}
                    <RoughNotation type="box" color="var(--color-paarl)" strokeWidth={2} padding={3} iterations={3} multiline>
                        cater to my cat's every whim
                    </RoughNotation>, practice the piano, play video/tabletop games, and build personal projects. 
                </p>
                <div className="tech-container">
                    <p>
                        Lately, I have been working with:
                    </p>
                    <RoughNotation type="bracket" brackets={['left', 'right']} color="var(--color-dove)" strokeWidth={2} padding={3}>
                        <ul className="tech-list">
                            {technologies.map((tech, i) => <li key={i}>{tech}</li>)}
                        </ul>
                    </RoughNotation>
                </div>
            </RoughNotationGroup>

        </AboutSection>
    );
}

export default About;