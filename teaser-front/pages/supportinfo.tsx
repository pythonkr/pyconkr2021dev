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


`;


export default function supportjoin( { data } : any ) {
    return (
        <>
            <Header />
            <PyconLogo />

            <ContentBackgroundBlock>
              <AboutSupportBlock>

              {
                  data.map((d:any, idx:number) => {

                    return (
                      <>
                        <h3>{d.name}</h3>

                        {
                          d.sponsors.map( (s:any) => (
                            <>
                              <PyconPersonBlock key={s.name}>
                              {s.logo_image ? <PersonImgBlock><Image src={s.logo_image} width={100} height={100} alt={s.name} layout="responsive" objectFit="contain"/></PersonImgBlock> : <BlankImgBlock />}

                              <PersonIntroBlock>
                                  <h3>{s.name}</h3>
                                  {/* <p><a href="/">후원사 알아보기</a></p> */}
                                  {/* <div className="product-des" dangerouslySetInnerHTML={{ __html: s.desc }}></div> */}

                              </PersonIntroBlock>
                            </PyconPersonBlock>
                            </>
                          ))
                        }

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

    const res = await fetch(url + '/sponsors')
    const data = await res.json()

    console.log(data)
    console.log('length: ', data.length)

    console.log(data[1].sponsors)

    if (!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data }, // will be passed to the page component as props
    }
  }
