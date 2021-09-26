import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../components/ContentBackground';
import { GuideContributeBlock } from '../components/contribute/GotoContribute';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PyconLogo from '../components/PyconLogo';

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

const PersonIntroBlock = styled.div`
    align-items: center;
    padding-bottom: 1rem;
`;

export const TextBlock = styled.p`
    font-size: 1.5em;
    font-weight: 500;
`;

export default function Patron({ data_patron } : any) {
    return (
        <>
            <Header />
            <PyconLogo />
            <ContentBackgroundBlock>
                <GuideContributeBlock>
                    <h1>개인 후원자 목록</h1>
                    <TextBlock>파이콘 한국 2021을 후원해주신 개인 후원자 분들의 명단입니다. 후원해주셔서 감사합니다.</TextBlock>

                    {
                        data_patron.map( (d : any) => {
                            return (
                                <PyconPersonBlock key={d.user_name}>
                                    <PersonIntroBlock>
                                        <h3>{d.user_name}</h3>
                                        <TextBlock>
                                            {d.desc}
                                        </TextBlock>
                                    </PersonIntroBlock>
                                </PyconPersonBlock>
                            )
                        })
                    }

                </GuideContributeBlock>
            </ContentBackgroundBlock>
            <Footer />
        </>
    )
}

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'

    if (process.env.ENV == 'LOCAL') {
      url = 'http://127.0.0.1:8000/api/v1'
    }

    const res = await fetch(url + '/patron/')
    const data_patron = await res.json()

    if (!data_patron) {
      return {
        notFound: true,
      }
    }

    return {
      props: { data_patron: data_patron}, // will be passed to the page component as props
    }
  }
