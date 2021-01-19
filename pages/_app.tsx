import { AppProps } from 'next/app';

import '@styles/globals.scss';

/**
 * Return the App
 * 
 * @param Component next context component
 * @param pageProps any data props
 * 
 * References:
 * - https://react-bootstrap.github.io/
 * - https://github.com/luckdev01/React-NextJS-Graphql-eCommerce
 */
const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default App