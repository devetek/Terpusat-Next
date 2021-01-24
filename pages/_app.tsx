import Head from 'next/head';
import { AppProps } from 'next/app';

import '@styles/globals.scss';

/**
 * Return the App
 * 
 * @param Component next context component
 * @param pageProps any data props
 * 
 * References:
 * - https://graphcms.com/
 * - https://react-bootstrap.github.io/
 * - https://github.com/luckdev01/React-NextJS-Graphql-eCommerce
 */
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Component {...pageProps}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Head>
    </Component>)
}

export default App