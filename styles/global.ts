import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Bold', sans-serif;
    }

    button {
        cursor: pointer;
    }
`;

export default GlobalStyle;
