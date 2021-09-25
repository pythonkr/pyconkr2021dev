import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import styled from '@emotion/styled';

const GlobalLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Head>
        <title>파이콘 한국 2021</title>
        <link rel="icon" href="/img/profile_wht.png" />
        <meta name="viewport" content="width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
    </GlobalLayout>
  )
}
export default App
