import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import { store } from '../store';

import Styles from '../styles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Styles />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
