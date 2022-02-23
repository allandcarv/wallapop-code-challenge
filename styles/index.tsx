import { Fragment } from 'react';

import FontFamilies from './fonts';
import GlobalStyle from './global';

const Styles = () => {
  return (
    <Fragment>
      <FontFamilies />
      <GlobalStyle />
    </Fragment>
  );
};

export default Styles;
