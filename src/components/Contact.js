import React, { useRef } from "react";
import styled from "styled-components";
import { useInViewport } from 'react-in-viewport';
import { RoughNotation } from "react-rough-notation";

const ContactSection = styled.section`
    border-top: 1px solid;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    text-align: center;
    padding: 50px;
`;

const ContactButton = styled.a`
    display: block;
    text-decoration: none;
    border: none;
    padding: 10px 20px;
    width: fit-content;
    font-weight: 700;
`;

const Contact = () => {
    const contactRef = useRef(null);
    const {enterCount} = useInViewport(contactRef);

    return (
        <ContactSection ref={contactRef}>
            <p>
                If you have any questions, comments, or just want to say hello, feel free to reach out! My inbox is always open.
            </p>
            <RoughNotation type="box" color="var(--color-jelly)" strokeWidth={2} iterations={4} show={enterCount}>
                <ContactButton href="mailto:hello@spencercoleman.dev">
                    Say Hi
                </ContactButton>
            </RoughNotation>
        </ContactSection>
    );
}

export default Contact;