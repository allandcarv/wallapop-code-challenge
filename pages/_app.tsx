import { Fragment } from 'react';
import type { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
