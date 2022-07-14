import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from "styled-components";

const FeaturedSection = styled.section``;

const WorksList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Work = styled.li`
    margin-bottom: 100px;

    :last-of-type {
        margin-bottom: 0;
    }

    > ul, .links {
        list-style: none;
        padding: 0;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const FeaturedWork = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    frontmatter {
                        title
                        date
                        image
                        url
                        repo_url
                        tech
                    }
                    body
                }
            }
        }
    `);

    return (
        <FeaturedSection>
            <h3>My Work</h3>
            <WorksList>
                {data.allMdx.nodes.map(node => {
                    const {title, url, repo_url, tech} = node.frontmatter;
                    return (
                        <Work key={title}>
                            <h4>{title}</h4>
                            <MDXRenderer>
                                {node.body}
                            </MDXRenderer>
                            <ul>
                                {tech.map(el => 
                                    <li key={`${title}_${el}`}>{el}</li>
                                )}
                            </ul>
                            <div className="links">
                                <a href={url} target="_blank" rel="noreferrer">View Site</a>
                                <a href={repo_url} target="_blank" rel="noreferrer">View on GitHub</a>
                            </div>
                        </Work>
                    )
                })}
            </WorksList>
        </FeaturedSection>
    );
}

export default FeaturedWork;