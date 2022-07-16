import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
    border-top: 1px solid;
    border-bottom: 1px solid;
    display: grid;
    gap: 25px;
`;

const About = () => {
    return (
        <AboutSection>
            <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </AboutSection>
    );
}

export default About;