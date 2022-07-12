import React from "react";
import styled from "styled-components";

const FeaturedSection = styled.section``;

const WorksList = styled.ul`
    list-style: none;
    padding: 0;
`;

const FeaturedWork = () => {
    return (
        <FeaturedSection>
            <h3>My Work</h3>
            <WorksList>
                {/* Add works content */}
            </WorksList>
        </FeaturedSection>
    );
}

export default FeaturedWork;