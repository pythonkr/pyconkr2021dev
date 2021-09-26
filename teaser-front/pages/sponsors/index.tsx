import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { AboutBlock } from '../../components/about/AboutContext';
import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../../components/ContentBackground';
import { Sponsors, Sponsor } from '../../types/sponsors';
import Layout from "../../components/Layout";


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

interface SponsorIndexProps {
    sponsors: Sponsors[]
}

export default function Index(data: SponsorIndexProps) {
    return (
        <Layout>
            <ContentBackgroundBlock>
            <AboutSupportBlock>
            {data.sponsors.map((item:Sponsors) => {
                return (
                    <>
                        <h3>{item.name}</h3>
                        {item.sponsors.map((sponsor: Sponsor) => (
                            <Link href={`/sponsors/${sponsor.slug}`} key={sponsor.slug}>
                                <a>
                                    <PyconPersonBlock key={sponsor.name}>
                                    {sponsor.logo_image
                                        ? (
                                            <PersonImgBlock>
                                                <Image src={sponsor.logo_image} width={100} height={100} alt={sponsor.name} layout="responsive" objectFit="contain"/>
                                            </PersonImgBlock>
                                        )
                                        : <BlankImgBlock />
                                    }
                                    <PersonIntroBlock>
                                        <h3>{sponsor.name}</h3>
                                        </PersonIntroBlock>
                                    </PyconPersonBlock>
                                </a>
                            </Link>
                        ))}
                    </>
            )})}
            </AboutSupportBlock>
            </ContentBackgroundBlock>
        </Layout>
    )
}

export async function getStaticProps() {
    let url = process.env.ENV == 'DEV' ? 'https://dev.2021.api.pycon.kr/api/v1' : 'https://2021.api.pycon.kr/api/v1'

    if (process.env.ENV == 'LOCAL') {
      url = 'http://127.0.0.1:8000/api/v1'
    }

    try {
      const res = await axios.get(url + '/sponsors')
      return {
        props: {
          sponsors: res.data
        }
      }
    } catch (error) {
      return {
        notFound: true
      }
    }
}
