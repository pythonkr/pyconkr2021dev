import React from 'react'
import styled from '@emotion/styled'
import {Sponsor} from '../../types/sponsors'

const SponsorsDetailContainer = styled.div`
    margin: 6rem 8rem;
`
const SponsorTitle = styled.h3`
    font-size: 3rem;
    margin: 0;
    display: flex;
    width: 100%;
    align-items: center;
`
const SponsorImage = styled.img`
    display: block;
    margin: 0 auto;
    margin-top: 4rem;
    width: 100%;
    max-width: 400px;
`
const SponsorInfoBlock = styled.div`
    margin-top: 2rem;
    font-size: 1.4rem;
`
const SponsorLevel = styled.span`
    border-radius: 8px;
    padding: 0.5rem 1rem;
    background-color: #7a7a7a;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1.6rem;
`
const SponsorUrl = styled.a`
    display: block;
    padding: 2rem 1.4rem;
    &:hover {
        text-decoration: underline;
    }
`
const SponsorContent = styled.p`
    white-space: pre-wrap;
    font-size: 1.3rem;
    line-height: 1.6;
    border-top: 1px solid #fff;
    padding: 2rem 1.4rem;
    margin: 0;
`


interface SponsorDetailProps {
    sponsor: Sponsor
}

const SponsorDetail: React.FC<SponsorDetailProps> = ({sponsor}) => {
    const stripedDesc = sponsor.desc.replace(/<[^>]+>/g, '');

    return (
        <SponsorsDetailContainer>
            <SponsorTitle>
                {sponsor.name}
                {/*<SponsorLevel>{sponsor.level}</SponsorLevel>*/}
            </SponsorTitle>
            <SponsorImage src={sponsor.logo_image} alt={sponsor.name}/>
            <SponsorInfoBlock>
                <SponsorUrl href={sponsor.url}>{sponsor.url}</SponsorUrl>
            </SponsorInfoBlock>
            <SponsorContent>{stripedDesc}</SponsorContent>
        </SponsorsDetailContainer>
    )
}

export default SponsorDetail
