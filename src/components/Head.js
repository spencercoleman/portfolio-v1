import React from "react";
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useLocation } from "@reach/router";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({title, description, image}) => {
    const { pathname } = useLocation();
    // TODO: Add image
    const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              defaultTitle: title
              defaultDescription: description
              siteUrl
            }
          }
        }
      `,
    );
    const {defaultTitle, defaultDescription, siteUrl, defaultImage} = site.siteMetadata;
    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname}`,
    }

    return (
        <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s - ${defaultTitle}`}>
            <html lang="en" />
            <meta name="description" content={seo.description} />
            {/* <meta name="image" content={seo.image} /> */}
            
            {seo.url && <meta property="og:url" content={seo.url} />}
            
            {seo.title && <meta property="og:title" content={seo.title} />}
            
            {seo.description && (
                <meta property="og:description" content={seo.description} />
            )}
            
            {seo.image && <meta property="og:image" content={seo.image} />}
            
            <meta name="twitter:card" content="summary_large_image" />
            
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            
            {seo.description && (
                <meta name="twitter:description" content={seo.description} />
            )}
            
            {seo.image && <meta name="twitter:image" content={seo.image} />}
        </Helmet>
    );
}

Head.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
}

Head.defaultProps = {
    title: null,
    description: null,
    image: null,
}

export default Head;