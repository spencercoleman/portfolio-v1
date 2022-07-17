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

        @media (min-width: 600px) {
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
                    I work on innovative projects that focus on {' '}
                    <RoughNotation type="underline" color="var(--color-jelly)" strokeWidth={2} padding={1} iterations={1}>
                        accessibile
                    </RoughNotation>, {' '} 
                    <RoughNotation type="underline" color="var(--color-dove)" strokeWidth={2} padding={1} iterations={1}>
                        user-centered design
                    </RoughNotation>. 
                    My time is spent researching, prototyping, and developing features that help empower individuals and create enriching experiences.
                </p>
                <p style={{gridColumn: '1 / 3'}}>
                    Outside of work, I'm usually {' '} 
                    <RoughNotation type="underline" color="var(--color-paarl)" strokeWidth={2} padding={1} iterations={4}>
                        catering to my cat's whims
                    </RoughNotation>, practicing piano, playing niche indie games, or building personal projects. 
                </p>
                <div className="tech-container">
                    <p>
                        Lately, I have been working with:
                    </p>
                    <RoughNotation type="bracket" brackets={['left', 'right']} color="var(--color-jelly)" strokeWidth={2} padding={3}>
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