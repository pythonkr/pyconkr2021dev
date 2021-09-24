import Image from 'next/image'
import { AboutBlock } from "../components/about/AboutContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PyconLogo from "../components/PyconLogo";
import JoinSponsor from "../components/support/JoinSponsor";
import styled from '@emotion/styled';


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


export default function supportjoin( { data } : any ) {
    return (
        <>
            <Header />
            <PyconLogo />

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
                            {s.logo_image ? <PersonImgBlock><Image src={s.logo_image} width={100} height={100} alt={s.name} layout="responsive"/></PersonImgBlock> : <BlankImgBlock />}

                            <PersonIntroBlock>
                                <h3>{s.name}</h3>

                                <div className="product-des" dangerouslySetInnerHTML={{ __html: s.desc }}></div>

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

            <Footer/>
        </>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://dev.2021.api.pycon.kr/api/v1/sponsors')
    const data = await res.json()

    const test = {"test" : "testValue"}

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
