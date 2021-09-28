import styled from '@emotion/styled';
import Link from 'next/link';
import { ContentBackgroundBlock } from '../ContentBackground';


const GotoSectionBlock = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    padding-top: 3rem;

    h1 {
        font-size: 4rem;
        color: #F5DF4D;
    }

    p {
        font-size: 2rem;
        cursor: pointer;
    }
`;

const LinkItem = styled.a`
    color: #4cc5f4;
    &:hover {
        text-decoration: underline;
    }
`


export function GotoSupport () {
    return (
        <ContentBackgroundBlock>
            <GotoSectionBlock>
                <h1>후원하기</h1>
                <p><Link href={'/support'}><LinkItem>파이콘 한국 2021 후원 안내 →</LinkItem></Link></p>
            </GotoSectionBlock>
        </ContentBackgroundBlock>
    )
}

export function GotoCoc () {
    return (
        <ContentBackgroundBlock>
            <GotoSectionBlock>
                <h1>행동강령</h1>
                <p><LinkItem href={'/coc'}><a>파이콘 한국 2021 행동 강령 확인하기 →</a></LinkItem></p>
            </GotoSectionBlock>
        </ContentBackgroundBlock>
    )
}
