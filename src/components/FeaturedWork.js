import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { FiCode, FiExternalLink } from 'react-icons/fi';
import styled from "styled-components";

const FeaturedSection = styled.section`
`;

const WorksList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 50px;
`;

const Work = styled.li`
    position: relative;
    border: 1px solid;

    :hover {
        box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    }

    .work-details {
        > p {
            border-top: 1px solid;
            margin: 0;
            padding: 25px 10px;
        }
    }

    .work-header {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        border-bottom: 1px solid;

        > h4 {
            margin: 0;
            font-size: var(--font-size-main);
            margin-right: auto;
            font-weight: 400;
            padding: 10px;

            :hover {
                > a {
                    text-decoration: underline;
                }
            }
        }
    }

    .work-techs, .work-links {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
       
        > li {
            > a {
                display: flex;
                align-items: center;
                padding: 10px;
            }

            :last-of-type {
                margin-right: 0;
            }
       }
    }

    .work-techs {
        font-size: var(--font-size-sm);
        border-top: 1px solid;
        padding: 0;

        > li {
            padding: 10px;
        }
    }

    .work-links {
        padding: 0;
    }

    .gatsby-img {
        object-fit: cover;
        width: auto;
        min-height: 300px;
    }

    &:nth-of-type(even) {
        text-align: right;

        .work-header {
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;

            > h4 {
                margin-right: 0; 
                margin-left: auto;
            }
        }

        .work-techs, .work-links {
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
        }

        .work-links {
            > li {
                :last-of-type {
                    transform: scaleX(-1);
                }
            }
        }
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
            <WorksList>
                {data.allMdx.nodes.map(node => {
                    const {title, image, url, repo_url, tech} = node.frontmatter;
                    const preview = getImage(image);
                    
                    return (
                        <Work key={title}>
                            <div className="work-header">
                                <h4><a href={url} target="_blank" rel="noreferrer">{title}</a></h4>
                                <ul className="work-links">
                                    <li>
                                        <a href={repo_url} target="_blank" rel="noreferrer" aria-label="Source Code">
                                            <FiCode name="Source" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={url} target="_blank" rel="noreferrer" aria-label="External Site">
                                            <FiExternalLink name="External" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="work-image">
                                <a href={url} target="_blank" rel="noreferrer">
                                    <GatsbyImage
                                        className="gatsby-img"
                                        image={preview}
                                        alt={title}
                                    />
                                </a>
                            </div>
                            <div className="work-details">
                                <MDXRenderer>
                                    {node.body}
                                </MDXRenderer>
                                <ul className="work-techs">
                                    {tech.map(el => 
                                        <li key={`${title}_${el}`}>{el}</li>
                                    )}
                                </ul>
                            </div>
                        </Work>
                    )
                })}
            </WorksList>
        </FeaturedSection>
    );
}

export default FeaturedWork;