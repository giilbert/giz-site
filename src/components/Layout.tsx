import React, { PropsWithChildren } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
  font-family: monospace;
  color: #eee;
}

body {
  background-color: #222;
}

h1 {
  font-size: 7rem;
}

p {
font-size: 2rem;
}
`;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  main {
    max-width: 800px;
    padding: 0 2rem;
  }
`;

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyles />

      <main>{children}</main>
    </PageContainer>
  );
};

export default Layout;
