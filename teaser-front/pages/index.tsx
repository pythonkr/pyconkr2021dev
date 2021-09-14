
import Image from 'next/image'
import FundingPyconkit from '../components/contribute/FundingPyconkit'
import GotoContribute from '../components/contribute/GotoContribute'
import Header from '../components/Header'
import MainView from '../components/main/MainView'
import AboutContext, { AboutBlock } from '../components/about/AboutContext'
import { GotoSupport, GotoCoc } from '../components/main/GotoSection'
import PyconLogo from '../components/PyconLogo'
import { ContentBackgroundBlock } from '../components/ContentBackground'
// import Sponsor from '../components/api/Sponsor'

export default function Home({ data, data_sponsor } : any) {
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
        
        {/* <Sponsor data_sponsor={data_sponsor} /> */}

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
  let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'

  if (process.env.ENV == 'LOCAL') {
    url = 'http://127.0.0.1:8000/api/v1'
  }

  const res = await fetch(url + '/article')
  const data = await res.json()

  const res_sponsor = await fetch(url + '/sponsors')
  const data_sponsor = await res_sponsor.json()

  if (!data || !data_sponsor) {
    return {
      notFound: true,
    }
  }

  console.log('notice_data: ', data)
  console.log('sponsor_data: ', data_sponsor)

  return {
    props: { data: data, 
             data_sponsor: data_sponsor 
    }, // will be passed to the page component as props
  }
}