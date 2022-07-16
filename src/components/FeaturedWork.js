import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import styled from "styled-components";

const FeaturedSection = styled.section``;

const WorksList = styled.ul`
    list-style: none;
    padding: 0;
`;

const Work = styled.li`
    margin-bottom: 100px;
    position: relative;
    display: grid;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 30px 90px;

    :last-of-type {
        margin-bottom: 0;
    }

    .work-details {
        z-index: 5;
        height: 100%;
        grid-column: 1 / -1;
        grid-row: 1 / -1;
        padding: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        > p {
            flex-grow: 1;
        }
    }

    .work-header {
        display: flex;
        align-items: center;

        > h4 {
            margin: 0;
            font-size: 25px;
            margin-right: auto;
        }
    }

    .work-techs, .work-links {
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
       
        > li {
            margin-right: 2rem;

            :last-of-type {
                margin-right: 0;
            }
       }
    }

    .work-techs {
        font-size: 16px;
    }

    .work-image {
        grid-column: 1 / -1;
        grid-row: 1 / -1; 
        z-index: 1;
        height: 100%;
        mix-blend-mode: multiply;
    }

    .gatsby-img {
        object-fit: cover;
        width: auto;
        height: 100%;
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
                        image {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
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
                    const {title, image, url, repo_url, tech} = node.frontmatter;
                    const preview = getImage(image);
                    
                    return (
                        <Work key={title}>
                            <div className="work-details">
                                <div className="work-header">
                                    <h4>{title}</h4>
                                    <ul className="work-links">
                                        <li><a href={repo_url} target="_blank" rel="noreferrer"><FiCode /></a></li>
                                        <li><a href={url} target="_blank" rel="noreferrer"><FiExternalLink /></a></li>
                                    </ul>
                                </div>
                                <MDXRenderer>
                                    {node.body}
                                </MDXRenderer>
                                <ul className="work-techs">
                                    {tech.map(el => 
                                        <li key={`${title}_${el}`}>{el}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="work-image">
                                <GatsbyImage
                                    className="gatsby-img"
                                    image={preview}
                                    alt={title}
                                />
                            </div>
                        </Work>
                    )
                })}
            </WorksList>
        </FeaturedSection>
    );
}

export default FeaturedWork;