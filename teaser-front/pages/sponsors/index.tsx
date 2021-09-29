import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import { AboutBlock } from '../../components/about/AboutContext';
import styled from '@emotion/styled';
import { ContentBackgroundBlock } from '../../components/ContentBackground';
import { Sponsors, Sponsor } from '../../types/sponsors';
import Layout from '../../components/Layout';

const SupportBackgroundBlock = styled(ContentBackgroundBlock)`
    padding-top: 2rem;
    @media (max-width: 768px) {
        width: 100vh;
    }
    @media (min-width: 768px) and (max-width: 1199px) {
        padding: 2rem;
    }
`;
const AboutSupportBlock = styled(AboutBlock)`
    margin: 0;
    font-size: 1.75rem;
`;

const SponsorLevel = styled.div`
    margin-bottom: 6rem;
`;
const SponsorLevelTitle = styled.h3`
    margin: 0;
`;
const SponsorGroup = styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    margin-top: 3rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SponsorItem = styled.li`
    min-height: 100px;
    max-width: 200px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    & + & {
        margin-left: 1.6rem;
        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 2rem;
        }
    }
`;

const SponsorImage = styled.img`
    width: 100%;
    display: inline-block;
    vertical-align: top;
`;

interface SponsorIndexProps {
    sponsors: Sponsors[];
}

export default function Index(data: SponsorIndexProps) {
    return (
        <Layout>
            <SupportBackgroundBlock>
                <AboutSupportBlock>
                    {data.sponsors.map((item: Sponsors) => {
                        return (
                            <SponsorLevel key={item.name}>
                                <SponsorLevelTitle>
                                    {item.name}
                                </SponsorLevelTitle>
                                <SponsorGroup>
                                    {item.sponsors.map((sponsor: Sponsor) => (
                                        <SponsorItem key={sponsor.slug}>
                                            <Link
                                                href={`/sponsors/${sponsor.slug}`}
                                            >
                                                <a>
                                                    <SponsorImage
                                                        src={sponsor.logo_image}
                                                        alt={sponsor.name}
                                                    />
                                                </a>
                                            </Link>
                                        </SponsorItem>
                                    ))}
                                </SponsorGroup>
                            </SponsorLevel>
                        );
                    })}
                </AboutSupportBlock>
            </SupportBackgroundBlock>
        </Layout>
    );
}

export async function getStaticProps() {
    let url =
        process.env.ENV == 'DEV'
            ? 'https://dev.2021.api.pycon.kr/api/v1'
            : 'https://2021.api.pycon.kr/api/v1';

    if (process.env.ENV == 'LOCAL') {
        url = 'http://127.0.0.1:8000/api/v1';
    }

    try {
        const res = await axios.get(url + '/sponsors');
        return {
            props: {
                sponsors: res.data
            }
        };
    } catch (error) {
        return {
            notFound: true
        };
    }
}
