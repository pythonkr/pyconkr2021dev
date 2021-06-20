
import Image from 'next/image'
import FundingPyconkit from '../components/contribute/FundingPyconkit'
import GotoContribute from '../components/contribute/GotoContribute'
import Header from '../components/Header'
import MainView from '../components/main/MainView'
import AboutContext from '../components/about/AboutContext'
import { GotoSupport, GotoCoc } from '../components/main/GotoSection'
import dot1 from '../public/img/dot1.png';
import dot2 from '../public/img/dot2.png';
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
          <Image src={dot1} alt="dot1" layout="responsive" />
          <PyconLogo />
          <Image src={dot2} alt="dot1" layout="responsive" />
        </ContentBackgroundBlock>
      
    </>
  )
}
