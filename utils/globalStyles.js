import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --main: #ffffff;
    --shadow: 0 1px 1px rgba(0, 0, 0, 0.15);
    --primary: #4fc08d;
    --text: #273849;
    --text-light: #46586A;
  }

  body{
    color: var(--text);
  }
`;
