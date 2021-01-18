import { AppProps } from 'next/app';

import '../src/UI/_settings/style.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
// eslint-disable-next-line react/jsx-props-no-spreading
  <main className="page-main">
    <Component {...pageProps} />
  </main>
);

export default MyApp;
