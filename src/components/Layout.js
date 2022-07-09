import React from "react";
import PropTypes from 'prop-types';
import GlobalStyle from "../styles/GlobalStyle";

const Layout = ({ children }) => {
    return (
        <>
            {/* TODO: Add head */}
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