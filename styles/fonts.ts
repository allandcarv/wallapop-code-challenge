import { createGlobalStyle } from 'styled-components';

import RobotoBold from '../assets/fonts/roboto/Roboto-Bold.ttf';
import RobotoBoldItalic from '../assets/fonts/roboto/Roboto-BoldItalic.ttf';
import Roboto from '../assets/fonts/roboto/Roboto-Regular.ttf';
import RobotoItalic from '../assets/fonts/roboto/Roboto-Italic.ttf';

const FontFamilies = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        src: url(${Roboto}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto Italic';
        src: url(${RobotoItalic}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto Bold';
        src: url(${RobotoBold}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto Bold Italic';
        src: url(${RobotoBoldItalic}) format('truetype');
    }
`;

export default FontFamilies;
