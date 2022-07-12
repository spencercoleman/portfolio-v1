import { createGlobalStyle } from "styled-components";
import "@fontsource/roboto-slab";
import "@fontsource/merriweather";
import "@fontsource/lato";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-sans: "Lato", sans-serif;
        --font-serif: "Merriweather", serif;
        --bluebell: #9aa5ce;
        --night: #1a1b26;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        font-family: var(--font-sans);
        color: var(--bluebell);
        background-color: var(--night);
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-size: 20px;
    }

    section {
        max-width: 1000px;
        margin: 0 auto;
    }

    main {
        padding: 0 25px;

        @media (min-width: 768px) {
            padding: 0 50px;
        }
    }

    h1, h3 {
        font-family: var(--font-serif);
        background: linear-gradient(140deg, #bb9af7 15%, #7aa2f7 35%, #7dcfff 60%, #b4f9f8 85%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

export default GlobalStyle;