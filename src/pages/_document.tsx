/* eslint-disable react/no-danger */
import { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from '../styles';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body className="bg-gray-900 bg-app bg-no-repeat bg-cover">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
