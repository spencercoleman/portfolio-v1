import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        width: 100%;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }
`;

export default GlobalStyle;