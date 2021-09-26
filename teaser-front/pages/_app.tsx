import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import styled from '@emotion/styled'
import { NextSeo } from 'next-seo'

const GlobalLayout = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100vh;
  }
`

function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <NextSeo
        title="파이콘 한국 2021"
        description="파이콘 한국은 한국의 파이썬 개발자들이 지식을 공유하고 만남을 갖기 위한 장입니다. 파이콘 한국 2021은 온라인으로 진행됩니다.'"
        openGraph={{
          type: 'website',
          url: 'https://2021.pycon.kr',
          site_name: '파이콘 한국 2021',
          description: '파이콘 한국은 한국의 파이썬 개발자들이 지식을 공유하고 만남을 갖기 위한 장입니다. 파이콘 한국 2021은 온라인으로 진행됩니다.',
          images: [{
            url: 'https://2021.pycon.kr/img/thumbnail.jpg'
          }]
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://2021.pycon.kr/img/profile_wht.png'
          }
        ]}
      />
      <Component {...pageProps} />
    </GlobalLayout>
  )
}
export default App
