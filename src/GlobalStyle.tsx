import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:0;
    box-sizing:border-box; 
    overflow-x: hidden;
  }

  * {
    font-family: koho;
  }

  .koho-extralight {
    font-family: "KoHo", sans-serif;
    font-weight: 200;
    font-style: normal;
  }

  .koho-light {
    font-family: "KoHo", sans-serif;
    font-weight: 300;
    font-style: normal;
  }

  .koho-regular {
    font-family: "KoHo", sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  .koho-medium {
    font-family: "KoHo", sans-serif;
    font-weight: 500;
    font-style: normal;
  }

  .koho-semibold {
    font-family: "KoHo", sans-serif;
    font-weight: 600;
    font-style: normal;
  }

  .koho-bold {
    font-family: "KoHo", sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  .koho-extralight-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 200;
    font-style: italic;
  }

  .koho-light-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 300;
    font-style: italic;
  }

  .koho-regular-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 400;
    font-style: italic;
  }

  .koho-medium-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 500;
    font-style: italic;
  }

  .koho-semibold-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 600;
    font-style: italic;
  }

  .koho-bold-italic {
    font-family: "KoHo", sans-serif;
    font-weight: 700;
    font-style: italic;
  }

`;

export default GlobalStyle;
