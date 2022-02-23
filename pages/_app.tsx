import { Fragment } from 'react';
import type { AppProps } from 'next/app';

import Styles from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Styles />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
