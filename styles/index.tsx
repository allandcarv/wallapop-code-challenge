import { Fragment } from 'react';

import Colors from './colors';
import FontFamilies from './fonts';
import GlobalStyle from './global';

const Styles = () => {
  return (
    <Fragment>
      <Colors />
      <FontFamilies />
      <GlobalStyle />
    </Fragment>
  );
};

export default Styles;
