
import Image from 'next/image'
import FundingPyconkit from '../components/contribute/FundingPyconkit'
import GotoContribute from '../components/contribute/GotoContribute'
import Header from '../components/Header'
import MainView from '../components/main/MainView'
import AboutContext, { AboutBlock } from '../components/about/AboutContext'
import { GotoSupport, GotoCoc } from '../components/main/GotoSection'
import PyconLogo from '../components/PyconLogo'
import { ContentBackgroundBlock } from '../components/ContentBackground'

export default function Home({ data } : any) {
  return (
    <>
        <Header />
        <MainView />
        <ContentBackgroundBlock>
            <div>
            <AboutBlock>
                <h1>공지사항</h1> 

                    {
                        data.map((d : any) => (
                            <p key={d.title}>
                                <a href={d.link}>{d.title}</a>
                            </p>
                        ))
                    }
            </AboutBlock>
            </div>

        </ContentBackgroundBlock>

        <GotoContribute />
        <FundingPyconkit />
        <AboutContext />
        <GotoSupport />
        <GotoCoc />
        <ContentBackgroundBlock>
          <Image src="/img/dot1.png" width={700} height={100} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
          <PyconLogo />
        <ContentBackgroundBlock>
          <Image src="/img/dot2.png" width={700} height={100} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
      
    </>
  )
}


export async function getStaticProps() {
  const res = await fetch('https://dev.2021.api.pycon.kr/api/v1/article')
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}