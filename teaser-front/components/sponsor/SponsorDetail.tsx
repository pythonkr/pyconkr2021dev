import React from 'react'
import styled from '@emotion/styled'
import {Sponsor} from '../../types/sponsors'
import Linkify from 'react-linkify'

const SponsorsDetailContainer = styled.div`
    margin: 6rem 8rem;
    @media(max-width: 768px) {
        margin: 6rem 4rem;
    }
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
const SponsorLevel = styled.span<{level:string}>`
    border-radius: 8px;
    padding: 0.5rem 1rem;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-left: 1.6rem;
    ${({ level }) => {
        if(level === '키스톤') {
            return `
            background-color: #8B00FF;
          `
        }
        else if(level === '다이아몬드') {
            return `
            background-color: #0000FF;
          `
        }
        else if(level === '플래티넘') {
            return `
            background-color: #00FFFF;
            color: #121212;
          `
        } else if (level === '골드') {
            return `
            background-color: #00FF00;
            color: #121212;
            `
        }
        else if (level === '스타트업') {
            return `
            background-color: #FFFF00;
            color: #121212;
            `
        }
        else if(level === '커뮤니티') {
            return `
            background-color: #FF7F00;
          `
        } else if (level === '출판사/미디어/기술후원') {
            return `
            background-color: #FF0000;
          `
        }
        return `
          background-color: #7a7a7a;
        `
    }}
`
const SponsorUrl = styled.a`
    display: block;
    padding: 2rem 1.4rem;
    color: #00bfff;
    &:hover {
        text-decoration: underline;
    }
`
const SponsorContent = styled.p`
    white-space: pre-wrap;
    font-size: 1.4rem;
    line-height: 1.5;
    border-top: 1px solid #fff;
    padding: 2rem 1.4rem;
    margin: 0;
    a {
        color: #4cc5f4;
        &:hover {
            text-decoration: underline;
        }
    }
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
                <SponsorLevel level={sponsor.level}>{sponsor.level}</SponsorLevel>
            </SponsorTitle>
            <SponsorImage src={sponsor.logo_image} alt={sponsor.name}/>
            <SponsorInfoBlock>
                <SponsorUrl href={sponsor.url}>{sponsor.url}</SponsorUrl>
            </SponsorInfoBlock>
            <SponsorContent>
                <Linkify>{stripedDesc}</Linkify>
            </SponsorContent>
        </SponsorsDetailContainer>
    )
}

export default SponsorDetail
