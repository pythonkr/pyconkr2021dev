import Image from 'next/image'
import { AboutBlock } from "../components/about/AboutContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PyconLogo from "../components/PyconLogo";
import JoinSponsor from "../components/support/JoinSponsor";
import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../components/ContentBackground';


const AboutSupportBlock = styled(AboutBlock)`
    margin-bottom: 10rem;
    li {
        font-size: 1.75rem;
    }
`;

const PyconPersonBlock = styled.div`
    display: flex;
    align-items: center;
    
    h3 {
        color: white;
    }

    & + & {
        margin-top: 2rem;
    }
`;

const PyconPersonsBlock = styled.div`

    h2 {
        color: #F5DF4D;
        font-size: 3rem;

        span {
            text-decoration: underline 10px;
        }
    }
    
`;

const PersonIntroBlock = styled.div`
    align-items: center;
    padding-bottom: 1rem;
    padding-left: 1rem;
    width: 80%;
`;

export const TextBlock = styled.p`
    font-size: 1.5em;
    font-weight: 500;
`;

const BlankImgBlock = styled.div`
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    margin: 1rem;
    background-color: #939597;
`;

const PersonImgBlock = styled(BlankImgBlock)`

    background-color: transparent;

    Img {
        border-radius: 4rem;
    }
`;


export default function SessionDay2( { data } : any ) {
    return (
        <>
        <Header />
        <PyconLogo />

        <ContentBackgroundBlock>
          <AboutSupportBlock>
          <h2>10월 3일 발표 시간표</h2>
          <p></p>

          {
              data.map((d:any, idx:number) => {
                return (
                  <>
                  {idx % 2 == 0 &&<hr></hr>}
                  <p>{d.video_open_at}     {d.title}</p>
                  
                  </>
                )
            })
          }

          </AboutSupportBlock>
        </ContentBackgroundBlock>
        <Footer/>
        </>
    )
}

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'

    if (process.env.ENV == 'LOCAL') {
      url = 'http://127.0.0.1:8000/api/v1'
    }

    const res = await fetch(url + '/program?day=3')
    const data = await res.json()

    console.log(data)
    console.log('length: ', data.length)

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }, // will be passed to the page component as props
    }
  }
