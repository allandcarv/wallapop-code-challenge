import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        color: var(--dark-gray);
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
    }

    body {
        background-color: var(--light-gray);
        font-family: 'Roboto', sans-serif;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Roboto Bold', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, select {
        cursor: pointer;

        &:disabled {
            cursor: not-allowed;
        }
    }

    ul {
        list-style-type: none;
    }
    
    #__next {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: 15% 1fr 10%;
        grid-template-areas:
            'header'
            'main'
            'footer';
    }
`;

export default GlobalStyle;
