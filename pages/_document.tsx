import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="id">
        <Head>
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <meta name="theme-color" content="#000000" />
          <meta name="msapplication-TileColor" content="#000000" />
          
          <meta name="msapplication-TileImage" content="/assets/images/ico/ms-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/ico/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/ico/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/ico/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/ico/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/ico/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/ico/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/ico/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/ico/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/ico/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/assets/images/ico/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/ico/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/ico/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/ico/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-91861704-2"
          ></script>
          <script type="text/javascript" src="/assets/js/analytics.js"></script>
          <noscript
          ><img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=354144445660476&ev=PageView&noscript=1"
            /></noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument