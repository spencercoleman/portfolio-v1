import React from "react";
import PropTypes from 'prop-types';
import GlobalStyle from "../styles/GlobalStyle";
import Head from './Head';

const Layout = ({ children }) => {
    return (
        <>
            <Head />
            <div id="root">
                <GlobalStyle />
                {/* TODO: Add navbar */}
                {/* TODO: Add links */}
                <main>
                    {children}
                </main>
                {/* TODO: Add footer */}
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;