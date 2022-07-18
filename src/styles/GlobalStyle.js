import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --font-main: "Sintony", sans-serif;
        --font-acc: "Source Sans Pro", sans-serif;
        --font-size-xxl: 3.05rem;
        --font-size-xl: 2.44rem;
        --font-size-lg: 1.95rem;
        --font-size-md: 1.56rem;
        --font-size-base: 16px;
        --font-size-sm: 0.8rem;
        --font-size-xs: 0.64rem;
        --color-dove: #6E6E6E;
        --color-jelly: #2574A9;
        --color-merino: #F7F2E7;
        --color-paarl: #A75925;
        --color-tundora: #424242;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        font-family: var(--font-main);
        font-size: var(--font-size-base);
        color: var(--color-dove);
        background-color: var(--color-merino);
        scrollbar-width: thin;
        scrollbar-color: rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.25);

        @media (min-width: 992px) {
            font-size: 16px;
        }
    }

    ::-webkit-scrollbar {
        width: 13px;
    }
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
    }
    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.25);
        border-radius: 10px;
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        font-weight: 400;
    }

    section {
        max-width: 700px;
        margin: 0 auto;
        padding: 50px 0;
    }

    main {
        padding: 0 25px;
        padding-bottom: 125px;

        @media (min-width: 768px) {
            padding: 0 50px;
            padding-bottom: 125px;
        }
    }

    h1, h2 {
        margin: 0;
    }

    h1, h3 {
        font-family: var(--font-acc);
        font-size: clamp(var(--font-size-lg), 8vw, var(--font-size-xxl));
        color: var(--color-tundora);
    }

    h2 {
        font-size: clamp(var(--font-size-md), 6vw, var(--font-size-xl));
        margin-bottom: 10px;
    }

    h3 {
        font-size: var(--font-size-main);
        margin: 0;
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;

        :hover {
            color: var(--color-tundora);
        }
    }

    p {
        margin: 0;
    }
`;

export default GlobalStyle;