
import Image from 'next/image'
import FundingPyconkit from '../components/contribute/FundingPyconkit'
import GotoContribute from '../components/contribute/GotoContribute'
import Header from '../components/Header'
import MainView from '../components/main/MainView'
import AboutContext from '../components/about/AboutContext'
import { GotoSupport, GotoCoc } from '../components/main/GotoSection'
import PyconLogo from '../components/PyconLogo'
import { ContentBackgroundBlock } from '../components/ContentBackground'

export default function Home() {
  return (
    <>
        <Header />
        <MainView />
        <GotoContribute />
        <FundingPyconkit />
        <AboutContext />
        <GotoSupport />
        <GotoCoc />
        <ContentBackgroundBlock>
          <Image src="/img/dot1.png" width={700} height={100} alt="dot1" layout="intrinsic" />
        </ContentBackgroundBlock>
          <PyconLogo />
        <ContentBackgroundBlock>
          <Image src="/img/dot2.png" width={700} height={100} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
      
    </>
  )
}
