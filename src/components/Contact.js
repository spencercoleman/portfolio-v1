import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
    border-top: 1px solid;
`;

const ContactButton = styled.a`
    display: block;
    text-decoration: none;
    border: 1px solid;
    padding: 10px;
    width: fit-content;
    font-size: var(--font-size-sm);
    margin-top: 25px;

    :hover {
        transform: translateY(-1px);
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }
`;

const Contact = () => {
    return (
        <ContactSection>
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