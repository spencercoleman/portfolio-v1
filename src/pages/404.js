import React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import { Link } from "gatsby";
import { RoughNotation } from "react-rough-notation";
import styled from "styled-components";

const NotFound = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding-bottom: 125px;
    text-align: center;
    p {
      margin-top: 25px;
    }

`;

const NotFoundPage = () => {
  return (
    <NotFound>
      <GlobalStyle />
      <title>Page Not found</title>
      <h1>404</h1>
      <h2>There's nothing here</h2>
      <p>
        <Link to="/">
          <RoughNotation type="box" color="var(--color-paarl)" strokeWidth={2} iterations={4} padding={15} show><strong>Go Home</strong></RoughNotation>
        </Link>
      </p>
    </NotFound>
  );
}

export default NotFoundPage;
