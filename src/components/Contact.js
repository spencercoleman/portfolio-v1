import React from "react";
import styled from "styled-components";

const ContactSection = styled.section``;

const ContactButton = styled.a`
    display: block;
    text-decoration: none;
    color: var(--bluebell);
    padding: 1rem 2rem;
    border: 2px solid var(--bluebell);
    border-radius: 0.5rem;
    width: fit-content;
    margin: 2rem 0;
    font-size: 16px;
    font-weight: 700;
`;

const Contact = () => {
    return (
        <ContactSection>
            <h3>Reach Out</h3>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>
            <ContactButton href="mailto:hello@spencercoleman.dev">
                Say Hi
            </ContactButton>
        </ContactSection>
    );
}

export default Contact;