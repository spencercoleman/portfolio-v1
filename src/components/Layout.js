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
                <main>
                    {children}
                </main>
            </div>
        </>
    );
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;